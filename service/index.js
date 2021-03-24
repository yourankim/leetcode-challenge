import path from 'path';
import fs from 'fs';

const getAllTopics = (data) => {
  const set = new Set();
  data.forEach((row) => {
    row.Topic.split(',').forEach((topic) => set.add(topic));
  });
  return set;
};

const getCountByTopics = (data) => {
  const topics = getAllTopics(data);
  const counts = Array.from(topics).map((topic) => {
    const topicObj = { topic };
    topicObj.total = data.filter((problem) =>
      problem.Topic.includes(topic)
    ).length;
    topicObj.solved = data.filter(
      (problem) => problem.Topic.includes(topic) && problem.Solved === 'O'
    ).length;
    return topicObj;
  });

  return counts;
};

const csvToArray = (PATH) => {
  const data = fs.readFileSync(PATH, 'UTF-8');
  const header = data.split('\r\n')[0].split(',');
  return data
    .slice(data.indexOf('\r\n') + 2)
    .split('\r\n')
    .map((row) => {
      const values = parseValues(row);
      const obj = {};
      header.forEach((head, index) => (obj[head] = values[index]));
      return obj;
    });
};

const parseValues = (row) => {
  let result = [];
  let isQuote = false;
  let value = '';
  for (let i = 0; i < row.length; i++) {
    if (row[i] === '"' && !isQuote) {
      isQuote = true;
    } else if (row[i] === '"' && isQuote) {
      result.push(value);
      value = '';
      isQuote = false;
      i++;
    } else if (row[i] === ',' && !isQuote) {
      result.push(value);
      value = '';
    } else {
      value += row[i];
    }
  }
  if (value.length > 0) result.push(value);
  return result;
};

export { csvToArray, getCountByTopics };
