import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['iOS', 'Android'],
  datasets: [
    {
      data: [30, 70], // Change the values as per your requirement
      backgroundColor: ['#E5ECFE', '#2F80ED'],
    },
  ],
};

const options = {
  cutout: '80%',
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const SemiPieChart = () => {
  return (
    <div className="w-32 h-32">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default SemiPieChart;