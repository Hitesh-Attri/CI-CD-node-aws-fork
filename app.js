const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/forked", (req, res) => {
  res.send("This is a forked repo");
});

module.exports = app;
