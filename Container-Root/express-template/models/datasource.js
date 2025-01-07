const { Sequelize } = require('sequelize');

// Initialize Sequelize instance
const sequelize = new Sequelize('test', 'postgres', 'pass', {
    host: 'demo-postgres',
    dialect: 'postgres',
    logging: console.log
  });

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
//testConnection()


module.exports = { sequelize }