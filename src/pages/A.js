import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

function Dashboard() {
  // Data untuk grafik batang
  const barData = {
    labels: ["Januari", "Februari", "Maret", "April", "Mei"],
    datasets: [
      {
        label: "Pemasukan Keuangan",
        data: [12, 19, 3, 5, 2],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Data untuk grafik pie
  const pieData = {
    labels: ["Merah", "Biru", "Kuning", "Hijau", "Ungu"],
    datasets: [
      {
        data: [50, 29, 25, 35, 18],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">
        Dashboard Grafik
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4 text-black-500">
            Grafik Batang
          </h2>
          <Bar data={barData} />
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4 text-black-500">
            Grafik Pie
          </h2>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
