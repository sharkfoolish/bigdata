const lineChartData = {
  labels: ['107上半年', '107下半年', '108上半年', '108下半年', '109上半年', '109下半年', '110上半年', '110下半年', '111上半年', '111下半年'],
  datasets: [
    {
      type: 'bar',
      label: '總共汽油機車數',
      data: [6642905, 5981468, 5423668, 4952131, 4534029, 4164653, 3850933, 3633065, 3419391, 3226317],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 1
    },
    {
      type: 'bar',
      label: '總共電動機車數',
      data: [362966, 388621, 410367, 458295, 565385, 620224, 655097, 683854, 720330, 757818],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 1
    },
    {
      type: 'line',
      label: '新購汽油機車數',
      borderColor: '#fd7e14',
      data: [614, 20, 6, 4, 14, 16, 15, 160, 260, 109]
    },
    {
      type: 'line',
      label: '新購電動機車數',
      borderColor: '#0dcaf0',
      data: [2680, 7681, 1835, 24389, 6768, 13211, 3730, 8465, 6093, 7437]
    },
  ]
};

const ctx = document.getElementById("LineChart");
const myChart = new Chart(ctx, {
  data: lineChartData
});
