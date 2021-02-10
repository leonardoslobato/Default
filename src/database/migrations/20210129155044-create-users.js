'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users',
      {
        id: {
          primaryKey: true,
          allowNull: false,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          // autoIncrement: true
        },
        name: {
          type: Sequelize.STRING,
          // allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          // allowNull: false,
        },
        password: {
          type: Sequelize.STRING,
          // allowNull: false,
        },

        //######################################
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        }
      }
    );
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('users');

  }
};
