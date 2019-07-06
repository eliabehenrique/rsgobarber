import * as Yup from 'yup';

import ProviderSchedule from '../models/ProviderSchedule';
import User from '../models/User';

class ProviderScheduleController {
  async store(req, res) {
    const schema = Yup.object().shape({
      schedules: Yup.array()
        .min(1)
        .required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails' });

    const checkProvider = await User.findByPk(req.userId);

    if (!checkProvider.provider)
      return res.status(401).json({ error: 'User not an provider' });

    const checkProviderSchedule = await ProviderSchedule.findOne({
      where: { provider_id: req.userId },
    });

    if (checkProviderSchedule)
      return res.status(401).json({ error: 'Provider already has a schedule' });

    const { schedules } = req.body;

    const providerSchedule = await ProviderSchedule.create({
      provider_id: req.userId,
      schedules: schedules.reduce((prev, curr) => `${prev};${curr}`),
    });

    return res.json(providerSchedule);
  }
}

export default new ProviderScheduleController();
