const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db.js");

db.query("SELECT * FROM example", (err, rows, fields) => {
  if (err) throw err;
  console.log(rows);
});

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/signin", (req, res) => {
  const { username, password } = req.body;
  res.send({ username, password });
});

app.listen(8081, () => console.log("Example app listening on port 8081!"));
