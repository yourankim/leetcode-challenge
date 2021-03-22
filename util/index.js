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

export { getAllTopics, getCountByTopics };
