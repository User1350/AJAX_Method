
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname));

let users = [];

app.post("/register", (req, res) => {
  users.push(req.body);
  console.log("Received user:", req.body);
  res.status(200).send("User data received");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
