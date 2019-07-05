import {
  startOfDay,
  endOfDay,
  setHours,
  setMinutes,
  setSeconds,
  format,
  isAfter,
} from 'date-fns';
import { Op } from 'sequelize';

import Appointment from '../models/Appointment';
import ProviderSchedule from '../models/ProviderSchedule';

class AvailableController {
  async index(req, res) {
    const { date } = req.query;

    if (!date) return res.json({ error: 'Invalid date' });

    const searchDate = Number(date);

    const appointments = await Appointment.findAll({
      where: {
        provider_id: req.params.providerId,
        canceled_at: null,
        date: {
          [Op.between]: [startOfDay(searchDate), endOfDay(searchDate)],
        },
      },
    });

    const providerSchedule = await ProviderSchedule.findOne({
      where: {
        provider_id: req.params.providerId,
      },
    });

    const schedules = providerSchedule.schedules.split(';');

    if (!schedules || schedules.length === 0)
      return res
        .status(400)
        .json({ error: 'Provider with no calendar available' });

    const available = schedules.map(time => {
      const [hour, minute] = time.split(':');
      const value = setSeconds(
        setMinutes(setHours(searchDate, hour), minute),
        0
      );

      return {
        time,
        value: format(value, "yyyy-MM-dd'T'HH:mm:ssxxx"),
        available:
          isAfter(value, new Date()) &&
          !appointments.find(a => format(a.date, 'HH:mm') === time),
      };
    });

    return res.json(available);
  }
}

export default new AvailableController();
