import Chart from "chart.js";

export const doughnutChartInit = () => {
  let ctx = document.getElementById("doughnutChart").getContext("2d");
  Chart.defaults.doughnut.cutoutPercentage = 70;
  let myChart = new Chart(ctx, {
    type: "doughnut",
    data: doughnutChartData,
    options: doughnutChartOptions
  });
};

let doughnutChartData = {
  labels: ["Да", "Нет"],
  datasets: [
    {
      data: [50, 50],
      backgroundColor: ["rgb(242, 101, 30)", "rgb(255, 228, 1)"]
    }
  ]
};

let doughnutChartOptions = {
  legend: {
    position: "right",
    boxWidth: 10
  },
  maintainAspectRatio: false
};
