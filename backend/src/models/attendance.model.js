const { DataTypes } = require('sequelize');

const Attendance = (sequelize) => {
  return sequelize.define('Attendance', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    courseId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('present', 'absent', 'late', 'excused'),
      defaultValue: 'present'
    },
    remarks: DataTypes.STRING,
    markedBy: DataTypes.UUID
  });
};

module.exports = Attendance;
