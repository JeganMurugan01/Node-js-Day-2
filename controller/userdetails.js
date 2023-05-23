const dbcon = require("../config/dbconfig.js");

 const addnewuserdetals = (req, res) => {
    const { name, email, age, mobilenumber, address, state, pincode } = req.body;

    const find = `SELECT email FROM userdetails WHERE email='${email}'`;

    dbcon.query(find, (err, result) => {
        if (err) throw err;
        console.log(result, "result");
        if (result.length > 0) {
            res.send("Email id is already exists");
        } else {
            const insert = `insert into userdetails  (name,email,age,mobilenumber,address,state,pincode) values ('${name}','${email}','${age}','${mobilenumber}','${address}','${state}','${pincode}')`;
            dbcon.query(insert, (err, result) => {
                if (err) throw err;
                if (result) {
                    res.send("User details added successfully");
                }
            });
        }
    });
};

module.exports = {
    addnewuserdetals,
};
