var myChart = echarts.init(document.getElementById('yes'));

const dataCount = 365;
const data = generateData(dataCount);
const data2 = generateData(dataCount);
const data3 = generateData(dataCount);
const data4 = generateData(dataCount);
const data5 = generateData(dataCount);
var option = {
  title: {
    text: "A Prediction of Your Year of spending",
    left: "center"
  },
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    bottom: 90
  },
  dataZoom: [
    {
      type: 'slider'
    }
  ],
  xAxis: {
    type: "category",
    data: data.categoryData,
    silent: false,
    splitLine: {
      show: false
    },
    splitArea: {
      show: false
    }
  },
  yAxis: {
    splitArea: {
      show: false
    }
  },
  series: [
    {
      type: 'bar',
      stack: "yes",
      data: data.valueData,
      // Set `large` for large data amount
      large: true
    },
    {
        type: 'bar',
        stack: "yes",
        data: data2.valueData,
        // Set `large` for large data amount
        large: true
      },
      {
          type: 'bar',
          stack: "yes",
          data: data3.valueData,
          // Set `large` for large data amount
          large: true
        },
        {
            type: 'bar',
            stack: "yes",
            data: data4.valueData,
            // Set `large` for large data amount
            large: true
          },
          {
              type: 'bar',
              stack: "yes",
              data: data5.valueData,
              // Set `large` for large data amount
              large: true
            }
  ]
};

function generateData(count) {
  let baseValue = Math.random() * 1000;
  let time = +new Date(2011, 0, 1);
  let smallBaseValue;
  function next(idx) {
    smallBaseValue =
      idx % 30 === 0
        ? Math.random() * 700
        : smallBaseValue + Math.random() * 500 - 250;
    baseValue += Math.random() * 20 - 10;
    return Math.max(0, Math.round(baseValue + smallBaseValue) + 3000);
  }
  const categoryData = [];
  const valueData = [];
  for (let i = 0; i < count; i++) {
    categoryData.push(
      echarts.format.formatTime('yyyy-MM-dd\nhh:mm:ss', time, false)
    );
    valueData.push(next(i).toFixed(2));
    time += 1000;
  }
  return {
    categoryData: categoryData,
    valueData: valueData
  };
}

myChart.setOption(option);