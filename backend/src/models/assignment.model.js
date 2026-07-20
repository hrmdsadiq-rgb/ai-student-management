const { DataTypes } = require('sequelize');

const Assignment = (sequelize) => {
  return sequelize.define('Assignment', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    courseId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.TEXT,
    dueDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    totalPoints: {
      type: DataTypes.INTEGER,
      defaultValue: 100
    },
    fileUrl: DataTypes.STRING,
    rubric: DataTypes.JSON,
    isPublished: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });
};

module.exports = Assignment;
