const getAllTopics = (data) => {
  const set = new Set();
  data.forEach((row) => {
    row.Topic.split(",").forEach((topic) => set.add(topic));
  });
  return set;
};

const getCountByTopics = (data) => {
  const topics = getAllTopics(data);
  const counts = new Map();
  topics.forEach((topic) => {
    const count = data.filter((problem) => problem.Topic.includes(topic))
      .length;
    const solvedCount = data.filter(
      (problem) => problem.Topic.includes(topic) && problem.Solved === "O"
    ).length;
    counts.set(topic, [count, solvedCount]);
  });

  return counts;
};

module.exports = { getAllTopics, getCountByTopics };
