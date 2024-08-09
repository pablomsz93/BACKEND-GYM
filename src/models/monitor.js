"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Monitor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Artists {1}---{n} appointment
      Monitor.hasMany(models.Appointment, {
        as: 'appointments',
        foreignKey: "monitors_id",
      });
    }
  }
  Monitor.init(
    {
      name: DataTypes.STRING,
      Bio: DataTypes.TEXT,
      Specialty: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Monitor",
      tableName: "monitor"
    }
  );
  return Monitor;
};
