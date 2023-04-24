const dbcon = require("../config/dbconfig.js");

function user(req, res) {
  const { email } = req.body;
  const { name, password } = req.body;
  const find = `SELECT * FROM users WHERE email='${email}'`;
  dbcon.query(find, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.send("Email is already in use");
    } else {
      const insert = `INSERT INTO users (name,email,password) VALUES ('${name}','${email}','${password}')`;
      dbcon.query(insert, (err, result) => {
        if (err) throw err;
        if (result) {
          res.send("User created");
        }
      });
    }
  });
}

const findUserdetails = (req, res) => {
  const { email } = req.body;
  const find = `SELECT * FROM users WHERE email='${email}'`;
  dbcon.query(find, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.send(result[0]);
    } else {
      res.send("User not found");
    }
  });
};

module.exports = { user, findUserdetails };
