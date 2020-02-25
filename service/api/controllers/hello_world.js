const db = require("../helpers/db.js");
const auth = require("../helpers/auth");

exports.getTasks = (req, res) => {
  let id = req.swagger.params.id.value;
  let sql = `SELECT * from tasks WHERE user_id = ${id}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      let response = {
        message: `Can't Get the tasks`
      };
      res.writeHead(403, {
        "Content-Type": "application/json"
      });
      return res.end(JSON.stringify(response));
    } else {
      let response = {
        ArrayTask: result
      };
      console.log(response);
      res.writeHead(200, {
        "Content-Type": "application/json"
      });
      return res.end(JSON.stringify(response));
    }
  });
};

exports.loginPost = (req, res) => {
  console.log("request for login");
  let username = req.body.username;
  let password = req.body.password;
  console.log(req.body);

  let sql = `SELECT * from users WHERE username='${username}' AND password = '${password}'`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      let response = {
        message: `Can't Login Post`
      };
      res.writeHead(403, {
        "Content-Type": "application/json"
      });
      return res.end(JSON.stringify(response));
    } else {
      let user = result[0];
      let response;
      if (result.length === 1) {
        let token = auth.issueToken(user.uid, user.username);
        response = {
          uid: result[0].uid,
          username: result[0].uid,
          token: token,
          loginSuccess: true
        };
        res.writeHead(200, {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        });
      } else {
        response = {
          message: `incorrect credentials`,
          loginSuccess: false
        };
        res.writeHead(401, {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        });
      }

      return res.end(JSON.stringify(response));
    }
  });
};
