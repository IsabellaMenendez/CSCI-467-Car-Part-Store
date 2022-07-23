const express = require("express");
const app = express();
var mysql = require('mysql')
const cors = require("cors");

app.use(cors());
app.use(express.json());

const legacy = mysql.createConnection({
  host: 'blitz.cs.niu.edu',
  user: 'student',
  password: 'student',
  database: 'csci467'
});

const newdb = mysql.createConnection({
  host: 'courses',
  user: 'z1885689',
  password: '1999Oct29',
  database: 'z1885689'
});

app.get("/Products", (req, res) => {
    legacy.query("SELECT * FROM parts", (err, result) => {
      if (err) {
        throw(err);
      } else {
        res.send(result);
      }
    });
});

app.listen(3001, () => {
    console.log("Server is active on port 3001");
});