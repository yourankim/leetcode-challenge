const express = require("express");
const app = express();
const port = 3000;

const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");
const { getCountByTopics } = require("./util");

const CSV_PATH = path.resolve("data/leetcode_update.csv");
const result = [];

app.get("/", (req, res) => {
  res.send("Hello, Test App!");
});

app.get("/chart", (req, res) => {
  fs.createReadStream(CSV_PATH)
    .pipe(csv())
    .on("data", (data) => result.push(data))
    .on("end", () => {
      const counts = getCountByTopics(result);
      console.log(counts);
      res.json(counts);
    });
});

app.listen(port, () => {
  console.log(`server listening at http://127.0.0.1/${port}`);
});
