import Chart from "chart.js";

export const horizontalChartInit = () => {
  let ctx = document.getElementById("horizontalChart").getContext("2d");
  let myChart = new Chart(ctx, {
    type: "horizontalBar",
    data: horizontalChartData,
    options: horizontalChartOptions
  });
};

let horizontalChartData = {
  labels: ["Всего", "Закрыто", "В работе", "Новый", "Просрочен"],
  datasets: [
    {
      data: [960, 820, 50, 80, 200, 1990],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)"
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)"
      ],
      borderWidth: 1,
      barPercentage: 0.8
    }
  ]
};

let horizontalChartOptions = {
  legend: {
    display: false
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  },
  maintainAspectRatio: false
};
