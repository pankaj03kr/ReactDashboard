import React from "react";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJs.register(CategoryScale, LinearScale, LineElement, PointElement);

const LineChart = () => {
  const data = {
    labels: [
      "01jan",
      "02jan",
      "03jan",
      "04jan",
      "05jan",
      "06jan",
      "07jan",
      "08jan",
      "09jan",
      "10jan",
      "11jan",
      "12jan",
    ],
    datasets: [
      {
        data: [35,40,65,45,10,15,28,5,18,20.15],
        backgroundColor: "transparent",
        borderColor: "#f26c6d",
        pointerBorderColor: "transparent",
        pointBorrderWidth: 4,
        tension: 0.5,
      },
    ],
  };
  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 5,
        //   callback: (value) => value +""
        },
        grid: {
          borderDash: [10],
        },
      },
    },
  };

  return (
    <div>
      <h1>Unique Visitors</h1>
      <Line data={data} options={options} style={{margin:"20px"}}></Line>
    </div>
  );
};

export default LineChart;
