const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World Test Temp!");
});

module.exports = app;
