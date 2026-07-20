const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT || 'postgres',
  logging: process.env.NODE_ENV === 'development' ? console.log : false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const UserModel = require('./user.model');
const StudentModel = require('./student.model');
const CourseModel = require('./course.model');
const GradeModel = require('./grade.model');
const AttendanceModel = require('./attendance.model');
const AssignmentModel = require('./assignment.model');
const AISessionModel = require('./aiSession.model');

const User = UserModel(sequelize);
const Student = StudentModel(sequelize);
const Course = CourseModel(sequelize);
const Grade = GradeModel(sequelize);
const Attendance = AttendanceModel(sequelize);
const Assignment = AssignmentModel(sequelize);
const AISession = AISessionModel(sequelize);

// Define associations
User.hasMany(Student, { foreignKey: 'userId', as: 'students' });
Student.belongsTo(User, { foreignKey: 'userId', as: 'user' });

Student.belongsToMany(Course, {
  through: 'StudentCourse',
  as: 'courses',
  foreignKey: 'studentId'
});

Course.belongsToMany(Student, {
  through: 'StudentCourse',
  as: 'students',
  foreignKey: 'courseId'
});

Grade.belongsTo(Student, { foreignKey: 'studentId', as: 'student' });
Grade.belongsTo(Course, { foreignKey: 'courseId', as: 'course' });
Student.hasMany(Grade, { foreignKey: 'studentId', as: 'grades' });
Course.hasMany(Grade, { foreignKey: 'courseId', as: 'grades' });

Attendance.belongsTo(Student, { foreignKey: 'studentId', as: 'student' });
Attendance.belongsTo(Course, { foreignKey: 'courseId', as: 'course' });
Student.hasMany(Attendance, { foreignKey: 'studentId', as: 'attendance' });

Assignment.belongsTo(Course, { foreignKey: 'courseId', as: 'course' });
Course.hasMany(Assignment, { foreignKey: 'courseId', as: 'assignments' });

AISession.belongsTo(Student, { foreignKey: 'studentId', as: 'student' });
Student.hasMany(AISession, { foreignKey: 'studentId', as: 'aiSessions' });

module.exports = {
  sequelize,
  User,
  Student,
  Course,
  Grade,
  Attendance,
  Assignment,
  AISession
};
