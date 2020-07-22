require('dotenv').config();
module.exports = {
  development: {
    username: 'root',
    password: process.env.DATABASE_PASSWORD,
    database: 'allgreenday',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  test: {
    username: 'admin',
    password: process.env.DATABASE_PASSWORD,
    database: 'allgreenday',
    host: 'allgreenday.cvlaa2wuiuxv.ap-northeast-2.rds.amazonaws.com',
    dialect: 'mysql'
  },
  production: {
    username: 'admin',
    password: process.env.DATABASE_PASSWORD,
    database: 'allgreenday',
    host: 'allgreenday.cvlaa2wuiuxv.ap-northeast-2.rds.amazonaws.com',
    dialect: 'mysql'
  }
};
