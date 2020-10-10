const express = require("express");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const db = require("./db.js");
const cors = require("cors");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/sign_in", (req, res) => {
  const { username, password } = req.body;
  res.send({ username, password });
});

app.post("/sign_up", (req, res, next) => {
  console.log(req.body);
  let body = req.body;

  let inputPassword = body.password;
  let salt = Math.round(new Date().valueOf() + Math.random()) + "";
  let hashPassword = crypto
    .createHash("sha512")
    .update(inputPassword + salt)
    .digest("hex");

  let sql = "INSERT INTO user (email, password, name, salt) VALUES(?, ?, ?, ?)";
  let params = [body.email, hashPassword, body.name, salt];
  db.query(sql, params, (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Insert Success");
    }
  });
});

app.listen(8081, () => console.log("Example app listening on port 8081!"));
