import Chart from "chart.js";

export const lineChartInit = () => {
  let ctx = document.getElementById("lineChart").getContext("2d");
  Chart.defaults.global.elements.point.hoverBorderWidth = 4;
  let myChart = new Chart(ctx, {
    type: "line",
    data: lineChartData,
    options: lineChartOptions
  });
};

let lineChartData = {
  labels: [
    "30.05",
    "31.05",
    "01.06",
    "02.06",
    "03.06",
    "04.06",
    "05.06",
    "06.06",
    "07.06",
    "08.06",
    "09.06"
  ],
  datasets: [
    {
      label: false,
      data: [42, 50, 40, 49, 40, 59, 38, 40, 50, 40, 45],
      backgroundColor: "rgba(245, 0, 87, .6)",
      pointBorderWidth: 4,
      pointHoverRadius: 7,
      pointHitRadius: 15,
      pointRadius: 0,
      pointBackgroundColor: "rgb(255, 255, 255)",
      pointBorderColor: "rgb(79, 95, 111)",
      borderWidth: 0,
      borderColor: "rgba(0, 0, 0, 0)"
    },
    {
      label: false,
      data: [52, 35, 50, 32, 47, 35, 55, 41, 35, 39, 49],
      backgroundColor: "rgba(156, 39, 176, .6)",
      pointBorderWidth: 4,
      pointHoverRadius: 7,
      pointHitRadius: 15,
      pointRadius: 0,
      pointBackgroundColor: "rgb(255, 255, 255)",
      pointBorderColor: "rgb(79, 95, 111)",
      borderWidth: 0,
      borderColor: "rgba(0, 0, 0, 0)"
    }
  ]
};

let lineChartOptions = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          padding: 20,
          fontSize: 13,
          fontFamily: "Comic Sans MS, cursive"
        },
        gridLines: {
          drawTicks: false,
          drawBorder: false
        }
      }
    ],
    xAxes: [
      {
        ticks: {
          padding: 20,
          fontSize: 13,
          fontFamily: "Comic Sans MS, cursive"
        },
        gridLines: {
          display: false,
          drawTicks: false
        }
      }
    ]
  },
  legend: {
    display: false
  },
  tooltips: {
    // Disable the on-canvas tooltip
    position: "nearest",
    enabled: false,
    yPadding: 8,
    xPadding: 14,
    bodyFontFamily: "Open Sans, sans-serif",
    bodyFontWeight: 700,
    bodyFontSize: 20,
    custom: function(tooltipModel) {
      // Tooltip Element
      let tooltipEl = document.getElementById("chartjs-tooltip");

      // Create element on first render
      if (!tooltipEl) {
        tooltipEl = document.createElement("div");
        tooltipEl.id = "chartjs-tooltip";
        tooltipEl.innerHTML = "<table></table>";
        document.body.appendChild(tooltipEl);
      }

      // Hide if no tooltip
      if (tooltipModel.opacity === 0) {
        tooltipEl.style.opacity = 0;
        return;
      }

      // Set caret Position
      tooltipEl.classList.remove("above", "below", "no-transform");
      if (tooltipModel.yAlign) {
        tooltipEl.classList.add(tooltipModel.yAlign);
      } else {
        tooltipEl.classList.add("no-transform");
      }

      function getBody(bodyItem) {
        return bodyItem.lines;
      }

      // Set Text
      if (tooltipModel.body) {
        // let titleLines = tooltipModel.title || [];
        let bodyLines = tooltipModel.body.map(getBody);

        let innerHtml = "<thead>";

        bodyLines.forEach(function(body, i) {
          let colors = tooltipModel.labelColors[i];
          let style = "background:" + colors.backgroundColor;
          style += "; border-color:" + colors.borderColor;
          style += "; border-width: 2px";
          let span = '<span style="' + style + '"></span>';
          innerHtml += "<tr><td>" + span + body + "</td></tr>";
        });
        innerHtml += "</tbody>";

        let tableRoot = tooltipEl.querySelector("table");
        tableRoot.innerHTML = innerHtml;
      }

      // `this` will be the overall tooltip
      let position = this._chart.canvas.getBoundingClientRect();

      // Display, position, and set styles for font
      tooltipEl.style.opacity = 1;
      tooltipEl.style.position = "absolute";
      tooltipEl.style.left =
        window.pageXOffset + position.left + tooltipModel.caretX + "px";
      tooltipEl.style.top =
        window.pageYOffset + position.top + tooltipModel.caretY - 65 + "px";
      tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
      tooltipEl.style.fontSize = tooltipModel.bodyFontSize + "px";
      tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
      tooltipEl.style.fontWeight = tooltipModel.bodyFontWeight;
      tooltipEl.style.padding =
        tooltipModel.yPadding + "px " + tooltipModel.xPadding + "px ";
      tooltipEl.style.pointerEvents = "none";
    }
  }
};
