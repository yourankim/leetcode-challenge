const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");
const result = [];

const CSV_PATH = path.resolve("data/leetcode_update.csv");

fs.createReadStream(CSV_PATH)
  .pipe(csv())
  .on("data", (data) => result.push(data))
  .on("end", () => {
    const solvedCount = result.filter((row) => row.Solved == "O").length;
    console.log(`You solved ${solvedCount} problem(s)!`);
  });
