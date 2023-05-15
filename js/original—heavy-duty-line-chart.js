const lineChartData = {
  labels: ['107上半年', '107下半年', '108上半年', '108下半年', '109上半年', '109下半年', '110上半年', '110下半年', '111上半年', '111下半年'],
  datasets: [
    {
      type: 'bar',
      label: '總共汽油機車數',
      data: [74472303, 75085089, 75551683, 75979166, 76230972, 76689256, 77093109, 77436314, 77729334, 77967240],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 1
    },
    {
      type: 'bar',
      label: '總共電動機車數',
      data: [406839, 629581, 924697, 1359710, 1719603, 1969958, 2162235, 2418165, 2667301, 2895843],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 1
    },
    {
      type: 'line',
      label: '新購汽油機車數',
      borderColor: '#fd7e14',
      data: [357444, 398267, 329410, 387825, 350005, 564058, 289006, 400360, 275151, 342899]
    },
    {
      type: 'line',
      label: '新購電動機車數',
      borderColor: '#0dcaf0',
      data: [27266, 44856, 55440, 86873, 35532, 44359, 29227, 52570, 32158, 40716]
    },
  ]
};

const ctx = document.getElementById("LineChart");
const myChart = new Chart(ctx, {
  data: lineChartData
});
