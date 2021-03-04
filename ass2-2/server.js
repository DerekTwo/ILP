// server.js
const express = require("express");
const path = require("path");
const app = express();
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "json", "db.json"));
  // __dirname: refers to trhe project dir
  // views: your folder name
  // home.html: file
  // this will refer the home.html from views folder
});

app.listen(3000, () => {
  console.log("server started");
});
