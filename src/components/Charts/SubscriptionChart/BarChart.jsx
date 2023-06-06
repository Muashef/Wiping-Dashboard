import React, { useState, useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Import Chart.js library
import plus from '../../../assets/svg/plus.svg'
import premium from '../../../assets/svg/premium.svg'
import free from '../../../assets/svg/free.svg'

const BarChart = () => {
  const [filter, setFilter] = useState('all'); // Initial filter state
  const chartRef = useRef(null); // Reference to the chart instance

  const data = {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [
      {
        label: 'Plus',
        data: [160000, 150000, 100000],
        backgroundColor: '#2F80ED',
        borderRadius : 13
        // stack: 'stack',
      },
      {
        label: 'Premium',
        data: [50000, 100000, 150000],
        backgroundColor: '#94B5FF',
        borderRadius : 13
        // stack: 'stack',
      },
      {
        label: 'Free',
        data: [100000, 50000, 80000],
        backgroundColor: '#C6D7FF',
        borderRadius : 13
        // stack: 'stack',
      },
     
    ],
  };

  const options = {
    indexAxis: 'x', // Display bars side by side
    scales: {
      y: {
        ticks: {
          stepSize: 50000,
          callback: (value) => {
            if (value === 0) return '0';
            if (value === 1000000) return '1M';
            return value / 1000 + 'K';
          },
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
      },
    },
  };

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy(); // Destroy the previous chart instance
    }

    // Create a new chart instance
    chartRef.current = new Chart(chartRef.current, {
      type: 'bar',
      data,
      options,
    });

    // Cleanup when the component unmounts
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy(); // Destroy the chart instance
      }
    };
  }, [filter]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <div className='flex justify-between'>
        <h4 className='text-[#9291A5] text-sm'>Statistics</h4>
        <div className="flex justify-end space-x-2 mb-4">
          <span className='flex items-center'> 
            <img className='mr-1' src={plus} alt="" />
            Plus
          </span>
          <span className='flex items-center'>
            <img className='mr-1' src={premium} alt="" />
            Premium
          </span>
          <span className='flex items-center'>
            <img className='mr-1' src={free} alt="" />
            Free
          </span>
          <select
            value={filter}
            onChange={handleFilterChange}
            className="px-2 py-1 border rounded outline-none"
          >
            <option value="all">All</option>
            <option value="last3months">Last 3 Months</option>
            <option value="last6months">Last 6 Months</option>
          </select>
        </div>
      </div>
      <Bar
        data={data}
        className='rounded-2xl'
        options={options}
        onElementsRemove={() => {
          // Manually destroy the chart instance on elements remove event
          if (chartRef.current) {
            chartRef.current.destroy();
          }
        }}
      />
    </div>
  );
};

export default BarChart;