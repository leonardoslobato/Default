import { Model, Sequelize, DataTypes } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          primaryKey: true,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4
        },
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING
      },
      {
        Sequelize,
      }
    )
  }
}

export default User;