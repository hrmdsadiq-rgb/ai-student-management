const { DataTypes } = require('sequelize');

const Student = (sequelize) => {
  return sequelize.define('Student', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    rollNumber: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    department: DataTypes.STRING,
    semester: DataTypes.INTEGER,
    cgpa: {
      type: DataTypes.DECIMAL(3, 2),
      defaultValue: 0
    },
    totalCredits: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    enrollmentDate: DataTypes.DATE,
    expectedGraduationDate: DataTypes.DATE,
    status: {
      type: DataTypes.ENUM('active', 'inactive', 'graduated', 'suspended'),
      defaultValue: 'active'
    },
    riskLevel: {
      type: DataTypes.ENUM('low', 'medium', 'high'),
      defaultValue: 'low'
    },
    personalStrengths: DataTypes.TEXT,
    areasForImprovement: DataTypes.TEXT
  });
};

module.exports = Student;
