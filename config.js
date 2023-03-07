require("dotenv").config();

const mysql = require("mysql");

const connection = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
});
// connection.connect((error) => {
//   if (error) throw error;
//   console.log("Successfully connected to the database.");
// });

module.exports = connection;
