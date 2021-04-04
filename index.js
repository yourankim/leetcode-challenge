const drawChart = (domElement, data) => {
  const chart = echarts.init(domElement);
  const option = {
    tooltip: {},
    legend: {},
    dataset: {
      dimensions: ['topic', 'total', 'solved'],
      source: data,
    },
    xAxis: {
      type: 'category',
    },
    yAxis: {},
    series: [{ type: 'bar' }, { type: 'bar' }],
  };
  chart.setOption(option);
};

const getData = async (URL) => {
  try {
    const response = await fetch(URL);
    return response.json();
  } catch (e) {
    console.error(e);
  }
};

const $chartDom = document.querySelector('#chart');
/*
getData('http://127.0.0.1:3000/chart')
  .then((data) => drawChart($chartDom, data))
  .catch((e) => console.error(e));
*/
(async () => {
  try {
    const data = await getData('http://127.0.0.1:3000/chart');
    drawChart($chartDom, data);
  } catch (e) {
    console.error(e);
  }
})();
