const Sequelize = require('sequelize');

//remember that the database url in your Heroku environment will be available in an environment variable DATABASE_URL
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/yourdbname', {
    logging: false
});

module.exports = db;