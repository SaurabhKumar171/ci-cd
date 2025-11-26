const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World Test!");
});

module.exports = app;
