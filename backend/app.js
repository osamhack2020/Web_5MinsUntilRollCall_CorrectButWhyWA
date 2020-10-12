const express = require("express");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const db = require("./db.js");
const cors = require("cors");
const session = require("express-session");
const app = express();

const OK = 200;
const UNAUTHORIZED = 401;

const makeHashPassword = (password, salt) => {
  return crypto
    .createHash("sha512")
    .update(password + salt)
    .digest("hex");
};

app.set("trust proxy", 1);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));
app.use(
  session({
    key: "sid",
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/auth/status", (req, res) => {
  console.log(req.session);
  if (req.session.email) {
    res.status(OK).send(JSON.stringify(req.session));
  } else {
    res.status(UNAUTHORIZED).send("Unauthorized");
  }
});

app.post("/auth/sign_in", (req, res) => {
  let sql = `SELECT * FROM user WHERE email="${req.body.email}"`;
  db.query(sql, (err, rows, fields) => {
    if (err) {
      console.log(err);
      res.status(UNAUTHORIZED).send("sql error");
    } else {
      let { email, password, name, salt } = rows[0];
      let hashPassword = makeHashPassword(req.body.password, salt);

      if (password === hashPassword) {
        console.log("Password is correct");
        req.session.email = email;
        req.session.name = name;
        req.session.save();

        console.log(req.session);
        res
          .set({ "Access-Control-Expose-Headers": "Set-Cookie" })
          .status(OK)
          .send("password is correct");
      } else {
        console.log("Password is incorrect");
        res.status(UNAUTHORIZED).send("password is incorrect");
      }
    }
  });
});

app.post("/auth/sign_up", (req, res, next) => {
  let body = req.body;

  let password = body.password;
  let salt = Math.round(new Date().valueOf() + Math.random()) + "";
  let hashPassword = makeHashPassword(password, salt);

  let sql = "INSERT INTO user (email, password, name, salt) VALUES(?, ?, ?, ?)";
  let params = [body.email, hashPassword, body.name, salt];
  db.query(sql, params, (err, rows, fields) => {
    if (err) {
      console.log(err);
      res.status(UNAUTHORIZED).send("sign up fail");
    } else {
      console.log("Insert Success");
      res.status(OK).send("sign up success");
    }
  });
});

app.listen(8081, () => console.log("Example app listening on port 8081!"));
