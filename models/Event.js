const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    event_description: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    event_date: {
      type: DataTypes.DATE,
      allowNull:false
    },
    time_of_event:{
      type: DataTypes.STRING,
      allowNull:false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    }   
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'event',
  }
);

module.exports = Event;


/// Events ( Id, category, event date, locaton, time, descripton)

// category
//Event table
