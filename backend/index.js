const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

const DB_PASSWORD = "super_secret_db_password";

app.use(express.json());

app.post("/login", (req, res) => {

  const password = req.body.password;

  const userId = req.body.id;

  // SQL injection
  const query = "SELECT * FROM users WHERE id = " + userId;

  console.log(query);

  // JWT without expiry
  const token = jwt.sign({ id: userId }, "MY_SECRET_KEY");

  res.json({ token });

});

app.listen(3001, () => {
  console.log("Backend running");
});