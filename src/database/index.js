import Sequelize from 'sequelize';

// import User from '../app/models/User';
// import Address from '../app/models/Address';
// import UserToken from '../app/models/UserToken';
// import Category from '../app/models/Category';
// import Service from '../app/models/Service';
// import User_category from '../app/models/User_category';
// import DaysWeek from '../app/models/DaysWeek';
// import Shift from '../app/models/Shift';
// import ProviderSchedules from '../app/models/ProviderSchedules';
// import Wirecard_account from '../app/models/Wirecard_account';
// import Credit_card from '../app/models/Credit_card';
// import Bank_account from '../app/models/Bank_account';
// import Appointment_status from '../app/models/Appointment_status';
// import Appointment from '../app/models/Appointment';
// import AppointmentItem from '../app/models/AppointmentItem';

import databaseConfig from '../config/database';

const models = [
  // User,
  // Address,
  // UserToken,
  // Category,
  // Service,
  // User_category,
  // DaysWeek,
  // Shift,
  // ProviderSchedules,
  // Wirecard_account,
  // Credit_card,
  // Bank_account,
  // Appointment_status,
  // Appointment,
  // AppointmentItem,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
