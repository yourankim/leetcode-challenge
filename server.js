import express from 'express';
import csv from 'csv-parser';
import path from 'path';
import fs from 'fs';
import { getCountByTopics } from './util/index.js';

const app = express();
const port = 3000;

const CSV_PATH = path.resolve('data/leetcode_update.csv');

app.get('/', (req, res) => {
  res.send('Hello, Test App!');
});

app.get('/chart', (req, res) => {
  const result = [];

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');

  fs.createReadStream(CSV_PATH)
    .pipe(csv())
    .on('data', (data) => result.push(data))
    .on('end', () => {
      const counts = getCountByTopics(result);
      console.log(counts);
      res.json(counts);
    });
});

app.listen(port, () => {
  console.log(`server listening at http://127.0.0.1/${port}`);
});
