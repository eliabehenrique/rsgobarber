import Sequelize, { Model } from 'sequelize';

class ProviderSchedule extends Model {
  static init(sequelize) {
    super.init(
      {
        schedules: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'provider_id', as: 'provider' });
  }
}

export default ProviderSchedule;
