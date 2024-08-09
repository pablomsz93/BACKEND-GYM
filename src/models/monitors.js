"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Monitors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Artists {1}---{n} appointment
      Monitors.hasMany(models.Appointment, {
        as: 'appointments',
        foreignKey: "monitor_id",
      });
    }
  }
  Monitors.init(
    {
      name: DataTypes.STRING,
      Bio: DataTypes.TEXT,
      Specialty: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Monitors",
      tableName: "monitors"
    }
  );
  return Monitors;
};
