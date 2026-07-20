const { DataTypes } = require('sequelize');

const Grade = (sequelize) => {
  return sequelize.define('Grade', {
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
    semester: DataTypes.INTEGER,
    internalMarks: DataTypes.DECIMAL(5, 2),
    externalMarks: DataTypes.DECIMAL(5, 2),
    totalMarks: DataTypes.DECIMAL(5, 2),
    letterGrade: DataTypes.STRING,
    gpa: DataTypes.DECIMAL(3, 2),
    remarks: DataTypes.TEXT,
    isPublished: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
};

module.exports = Grade;
