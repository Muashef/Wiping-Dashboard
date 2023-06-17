import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

const IncomeChart = () => {
  const [timePeriod, setTimePeriod] = useState('quarterly');

  const data = {
    labels: [
      'May-Aug', 'Sep-Dec', 'Jan-Apr'
    ],
    datasets: [
      {
        data: [0, 50, 100, 130],
        fill: true,
        backgroundColor: 'rgba(0, 190, 255, 0.4)',
        borderColor: '#00A0FF',
        borderWidth: 2,
        borderRadius: 50,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          callback: (value) => `${value}`,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    layout: {
        padding: {
          left: 0,
          right: 0,
        },
      },
  };

  const handleTimePeriodChange = (period) => {
    setTimePeriod(period);
  };

  return (
    <div className="relative">
        <div className='flex items-center justify-between mb-3'>
            <div className='flex items-center space-x-2'>
                <h3 className='text-[#232360] text-2xl font-bold'>Income</h3>
                <div className='flex items-center space-x-2'>
                    <p>#223,890</p>
                    <p>$23,890</p>
                </div>
            </div>
            <div className="absolute top-2 right-2">
                <button
                className={`text-[#232360] text-lg ${
                    timePeriod === 'weekly' ? 'border-b-2 border-b-[#2F80ED] text-[#232360] text-lg' : ''
                }`}
                onClick={() => handleTimePeriodChange('weekly')}
                >
                Weekly
                </button>
                <button
                className={` text-[#232360] text-lg ml-4 ${
                    timePeriod === 'monthly' ? 'border-b-2 border-b-[#2F80ED] text-[#232360] text-lg' : ''
                }`}
                onClick={() => handleTimePeriodChange('monthly')}
                >
                Monthly
                </button>
                <button
                className={`text-[#232360] text-lg ml-4 ${
                    timePeriod === 'quarterly' ? 'border-b-2 border-b-[#2F80ED] text-[#232360] text-lg' : ''
                }`}
                onClick={() => handleTimePeriodChange('quarterly')}
                >
                Quarterly
                </button>
            </div>
        </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default IncomeChart;