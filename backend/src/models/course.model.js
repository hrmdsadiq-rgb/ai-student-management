const { DataTypes } = require('sequelize');

const Course = (sequelize) => {
  return sequelize.define('Course', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.TEXT,
    credits: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    semester: DataTypes.INTEGER,
    instructorId: DataTypes.UUID,
    capacity: DataTypes.INTEGER,
    currentEnrollment: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    schedule: DataTypes.JSON,
    classroom: DataTypes.STRING,
    prerequisites: DataTypes.JSON,
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });
};

module.exports = Course;
