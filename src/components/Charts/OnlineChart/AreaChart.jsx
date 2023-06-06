import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

const AreaChart = () => {
  const [timePeriod, setTimePeriod] = useState('daily');

  const data = {
    labels: [
      'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov',
      'Dec', 'Jan', 'Feb', 'Mar', 'Apr',
    ],
    datasets: [
      {
        label: 'Percentage',
        data: [40, 80, 55, 95, 61, 72, 80, 80, 101, 150, 145],
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
          callback: (value) => `${value}%`,
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
            <div>
                <h3 className='text-[#232360] text-2xl font-bold'>Online Average</h3>
            </div>
            <div className="absolute top-2 right-2">
                <button
                className={`text-[#232360] text-lg ${
                    timePeriod === 'daily' ? 'border-b-2 border-b-[#2F80ED] text-[#232360] text-lg' : ''
                }`}
                onClick={() => handleTimePeriodChange('daily')}
                >
                Daily
                </button>
                <button
                className={` text-[#232360] text-lg ml-4 ${
                    timePeriod === 'weekly' ? 'border-b-2 border-b-[#2F80ED] text-[#232360] text-lg' : ''
                }`}
                onClick={() => handleTimePeriodChange('weekly')}
                >
                Weekly
                </button>
                <button
                className={`text-[#232360] text-lg ml-4 ${
                    timePeriod === 'monthly' ? 'border-b-2 border-b-[#2F80ED] text-[#232360] text-lg' : ''
                }`}
                onClick={() => handleTimePeriodChange('monthly')}
                >
                Monthly
                </button>
            </div>
        </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default AreaChart;