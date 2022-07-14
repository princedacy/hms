import Chart from "chart.js/auto";
import { getRelativePosition } from "chart.js/helpers";
export const options = {
  plugins: {
    legend: {
      position: "top",
      align: "start",
      labels: {
        boxWidth: 15,
        usePointStyle: true,
        pointStyle: "circle",
      },
      title: {
        text: "Sales analytics",
        display: true,
        color: "#000",
        font: {
          size: 18,
        },
      },
    },
  },
  scales: {
    xAxis: {
      display: true,
    },
    yAxis: {
      max: 1,
    },
  },
  elements: {
    bar: {
      barPercentage: 0.3,
      categoryPercentage: 1,
    },
  },
};
