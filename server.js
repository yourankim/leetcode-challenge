import express from 'express';
import path from 'path';
import { csvToArray, getCountByTopics } from './service/index.js';

const CSV_PATH = path.resolve('data/leetcode_update.csv');

const app = express();
const port = 3000;
let data = [];

app.get('/', (req, res) => {
  res.send('Hello, Test App!');
});

app.get('/chart', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.json(getCountByTopics(data));
});

app.listen(port, () => {
  console.log(`server listening at http://127.0.0.1/${port}`);
  data = csvToArray(CSV_PATH);
  console.log(data[0]);
});
