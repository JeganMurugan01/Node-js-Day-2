const mysql = require("mysql2");

const dbcon = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Admin@1234",
  database: "node_auth_api",
});

dbcon.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL");
});

module.exports = dbcon;
