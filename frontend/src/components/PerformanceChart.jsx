import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function PerformanceChart({ marks }) {

  const data = {
    labels: ["Python", "Java", "DBMS", "OS", "CN"],
    datasets: [
      {
        label: "Marks",
        data: [
          marks.python,
          marks.java,
          marks.dbms,
          marks.os,
          marks.cn,
        ],
        backgroundColor: [
          "#2563eb",
          "#16a34a",
          "#f59e0b",
          "#8b5cf6",
          "#ef4444",
        ],
      },
    ],
  };

  return <Bar data={data} />;
}

export default PerformanceChart;