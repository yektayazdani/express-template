const {DataTypes, Model } = require('sequelize');
const {sequelize} = require('./datasource')

class User extends Model{}
User.init(
    {
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
        // Model attributes are defined here
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        },
        age:{
            type: DataTypes.INTEGER
        },
        city:{
            type: DataTypes.STRING
        }
    },
    {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'User', // We need to choose the model name
    },
);
(async () => {
    await sequelize.sync();
  })();

module.exports = {
    User
}