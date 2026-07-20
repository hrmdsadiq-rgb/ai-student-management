const { DataTypes } = require('sequelize');

const AISession = (sequelize) => {
  return sequelize.define('AISession', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM('chat', 'analysis', 'prediction', 'assessment'),
      allowNull: false
    },
    topic: DataTypes.STRING,
    conversation: DataTypes.JSON,
    result: DataTypes.JSON,
    feedback: DataTypes.TEXT,
    duration: DataTypes.INTEGER,
    tokenUsage: DataTypes.JSON
  });
};

module.exports = AISession;
