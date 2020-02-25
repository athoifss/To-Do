const mysql = require("mysql");

var db = mysql.createConnection({
  multipleStatements: true,
  host: `localhost`,
  user: `root`,
  password: ``,
  database: `todo`
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log("DB Connected");
});

module.exports = db;
