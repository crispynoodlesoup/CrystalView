var myChart = echarts.init(document.getElementById('weekly-pie'));

var option = {
    title: {
        show: true,
        text: "This Week's Expenses",
        left: 'center',
        textStyle: {
            color: 'black',
            fontSize: 21
        }
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '78%',
      left: 'center'
    },
    series: [
      {
        type: 'pie',
        radius: ['2%', '70%'],
        center: ['50%', '42%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false
        },
        data: [
          { value: 1048, name: 'Bills' },
          { value: 735, name: 'Food' },
          { value: 580, name: 'Shopping' },
          { value: 484, name: 'Savings' },
          { value: 300, name: 'Entertainment' }
        ]
      }
    ]
  };

  myChart.setOption(option);

let arr = [...Array(31).keys()].splice(1);

var myChart2 = echarts.init(document.getElementById('monthly-expenditure-chart'));

option2 = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  title: {
      show: true,
      text: "30 Day Expense Overview",
      left: 'center',
      textStyle: {
          color: 'black',
          fontSize: 21
      }
  },
  legend: {
    top: '90%'
  },
  xAxis: [
    {
      type: 'category',
      data: arr
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Bills',
      type: 'bar',
      stack: 'expenditure',
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Food',
      type: 'bar',
      stack: 'expenditure',
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290, 330, 310, 182, 330, 310, 330, 310, 182, 191, 191, 234, 290, 330, 310, 330, 310, 182, 191, 290, 330, 310, 330, 310, 182, 191, 290,]
    },
    {
      name: 'Savings',
      type: 'bar',
      stack: 'expenditure',
      emphasis: {
        focus: 'series'
      },
      data: [150, 232, 201, 154, 190, 330, 410, 190, 330, 410, 232, 201, 154, 190, 410, 190, 330, 410, 232, 201, 410, 190, 330, 410, 232, 201, 410, 190, 330, 410, 232, 201]
    },
    {
      name: 'Shopping',
      type: 'bar',
      stack: 'expenditure',
      emphasis: {
        focus: 'series'
      },
      data: [150, 232, 201, 154, 190, 330, 410, 190, 330, 410, 232, 201, 154, 190, 410, 190, 330, 410, 232, 201, 410, 190, 330, 410, 232, 201, 410, 190, 330, 410, 232, 201]
    },
    {
      name: 'Entertainment',
      type: 'bar',
      stack: 'expenditure',
      emphasis: {
        focus: 'series'
      },
      data: [150, 232, 201, 154, 190, 330, 410, 190, 330, 410, 232, 201, 154, 190, 410, 190, 330, 410, 232, 201, 410, 190, 330, 410, 232, 201, 410, 190, 330, 410, 232, 201]
    }
  ]
};

myChart2.setOption(option2);