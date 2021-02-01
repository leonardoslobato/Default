module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'default_database',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};


// require('dotenv').config();

// module.exports = {
//   dialect: 'mysql',
//   host: process.env.DB_HOST,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
//   define: {
//     timestamp: true,
//     underscored: true,
//     underscoredAll: true,
//   },
// };
