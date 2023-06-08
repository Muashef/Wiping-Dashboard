import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  const data = {
    labels: ['Pending', 'Rejected', 'Accepted'],
    datasets: [
      {
        data: [2811, 2811, 2811],
        backgroundColor: ['#2F80ED', '#E5ECFE', '#94B5FF'],
      },
    ],
  };

  const options = {
    plugins: {
        legend: {
          display: false,
        },
      },
    tooltips: {
      callbacks: {
        label: (tooltipItem, data) => {
          const label = data.labels[tooltipItem.index];
          const value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
          return `${label}: ${value}`;
        },
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;