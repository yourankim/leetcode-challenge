const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");
const { getAllTopics, getCountByTopics } = require("./util");
const result = [];

const CSV_PATH = path.resolve("data/leetcode_update.csv");

fs.createReadStream(CSV_PATH)
  .pipe(csv())
  .on("data", (data) => result.push(data))
  .on("end", () => {
    const counts = getCountByTopics(result);
    console.log(counts);
  });
