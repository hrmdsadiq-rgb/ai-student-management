const app = require('./app');
const { sequelize } = require('./models');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Sync database
    await sequelize.authenticate();
    console.log('✓ Database connected successfully');

    // Start server
    app.listen(PORT, () => {
      console.log(`\n🚀 Server running on http://localhost:${PORT}`);
      console.log(`📚 API Documentation: http://localhost:${PORT}/api/docs`);
      console.log(`\n✓ Environment: ${process.env.NODE_ENV || 'development'}`);
    });
  } catch (error) {
    console.error('✗ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

// Handle uncaught exceptions
process.on('unhandledRejection', (error) => {
  console.error('Unhandled Rejection:', error);
  process.exit(1);
});
