const express = require("express");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const db = require("./db.js");
const cors = require("cors");
const session = require("express-session");
const app = express();

const OK = 200;
const BAD_REQUEST = 400;
const UNAUTHORIZED = 401;
const DEFAULT_DATETIME = "1000-01-01 00:00:00";

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
  // console.log(req.session);
  if (req.session.email) {
    res.status(OK).send(JSON.stringify(req.session));
  } else {
    res.status(UNAUTHORIZED).send("Unauthorized");
  }
});

app.post("/auth/sign_in", (req, res) => {
  console.log("/auth/sign_in");
  // console.log(req.body);

  let sql = `SELECT * FROM user WHERE email="${req.body.email}"`;
  db.query(sql, (err, rows, fields) => {
    if (err) {
      console.log("Error!");
      console.log(err);
      res.status(UNAUTHORIZED).send("sql error");
      return;
    }

    if (rows.length == 0) {
      res.status(UNAUTHORIZED).send("Your information is not on DB");
      return;
    }
    let { email, password, name, salt } = rows[0];
    let hashPassword = makeHashPassword(req.body.pas  sword, salt);

    if (password === hashPassword) {
      // console.log("Password is correct");
      req.session.email = email;
      req.session.name = name;
      req.session.save();

      // console.log(req.session);
      res
        .set({ "Access-Control-Expose-Headers": "Set-Cookie" })
        .status(OK)
        .send("password is correct");
    } else {
      console.log("Password is incorrect");
      res.status(UNAUTHORIZED).send("password is incorrect");
    }
  });
});

app.post("/auth/sign_up", (req, res) => {
  let body = req.body;

  let password = body.password;
  let salt = Math.round(new Date().valueOf() + Math.random()) + "";
  let hashPassword = makeHashPassword(password, salt);

  console.log("/auth/sign_up");
  // console.log(body);

  let sql = "INSERT INTO user (email, password, name, salt) VALUES(?, ?, ?, ?)";
  let params = [body.email, hashPassword, body.name, salt];
  db.query(sql, params, (err, rows, fields) => {
    if (err) {
      console.log(err);
      res.status(UNAUTHORIZED).send("sign up fail");
    } else {
      // console.log("Insert Success");
      res.status(OK).send("sign up success");
    }
  });
});

app.get("/database/user", (req, res) => {
  console.log("/database/user");
  if (!req.session.name) {
    // console.log(req.session);
    res.status(UNAUTHORIZED).send("You didn't sign in");
  } else {
    // console.log("sign in Complete!!");
    let admin_name = req.session.name;
    let sql = `SELECT * FROM soldier WHERE admin_name="${admin_name}" ORDER BY name`;
    db.query(sql, (err, rows, fields) => {
      if (err) {
        console.log(err);
        res.status(BAD_REQUEST).send("Something is Wrong.");
      } else {
        // console.log(rows);
        res.status(OK).send(rows);
      }
    });
  }
});

app.post("/database/register", (req, res) => {
  if (!req.session.name) {
    console.log("/database/user");
    // console.log(req.session);
    res.status(UNAUTHORIZED).send("You didn't sign in");
  } else {
    let admin_name = req.session.name;
    let sql =
      "INSERT INTO soldier (admin_name, name, military_number, phone_out, phone_in, roll) VALUES(?, ?, ?, ?, ?, ?)";
    let params = [
      admin_name,
      req.body.name,
      req.body.military_number,
      DEFAULT_DATETIME,
      DEFAULT_DATETIME,
      DEFAULT_DATETIME,
    ];

    db.query(sql, params, (err, rows, fields) => {
      if (err) {
        console.log(err);
        res.status(BAD_REQUEST).send("Something is Wrong.");
      } else {
        // console.log(rows);
        res.status(OK).send("Register Soldier Complete");
      }
    });
  }
});

app.post("/database/delete", (req, res) => {
  if (!req.session.name) {
    res.status(UNAUTHORIZED).send("You didn't sign in");
  } else {
    let admin_name = req.session.name;
    let sql =
      "DELETE FROM soldier WHERE admin_name=? and name=? and military_number=?";
    let params = [admin_name, req.body.name, req.body.military_number];

    db.query(sql, params, (err, rows, fields) => {
      if (err) {
        console.log(err);
        res.status(BAD_REQUEST).send("Something is Wrong.");
      } else {
        // console.log(rows);
        res.status(OK).send("Delete Soldier Complete");
      }
    });
  }
});

app.post("/database/update/phone_in", (req, res) => {
  console.log("/database/update/phone_in");
  let sql = "UPDATE soldier SET phone_in=? WHERE military_number=?";
  let params = [req.body.phone_in, req.body.military_number];
  console.log(JSON.stringify(params));

  db.query(sql, params, (err, rows, fields) => {
    if (err) {
      console.log(err);
      res.status(BAD_REQUEST).send("Something is Wrong.");
    } else {
      // console.log(rows);
      res.status(OK).send("Update Phone In Complete");
    }
  });
});

app.post("/database/update/phone_out", (req, res) => {
  let sql = "UPDATE soldier SET phone_out=? WHERE military_number=?";
  let params = [req.body.phone_out, req.body.military_number];

  db.query(sql, params, (err, rows, fields) => {
    if (err) {
      console.log(err);
      res.status(BAD_REQUEST).send("Something is Wrong.");
    } else {
      console.log(rows);
      res.status(OK).send("Update Phone In Complete");
    }
  });
});

app.post("/database/update/roll", (req, res) => {
  let sql = "UPDATE soldier SET roll=? WHERE military_number=?";
  let params = [req.body.roll, req.body.military_number];

  console.log(params);
  db.query(sql, params, (err, rows, fields) => {
    if (err) {
      console.log(err);
      res.status(BAD_REQUEST).send("Something is Wrong.");
    } else {
      console.log(rows);
      res.status(OK).send("Update Phone In Complete");
    }
  });
});

app.listen(8081, () => console.log("Example app listening on port 8081!"));
