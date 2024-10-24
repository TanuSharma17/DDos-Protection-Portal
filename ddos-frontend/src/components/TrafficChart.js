// src/components/TrafficChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Traffic Volume',
      data: [100, 200, 150, 300, 250, 400],
      fill: false,
      backgroundColor: 'rgb(75, 192, 192)',
      borderColor: 'rgba(75, 192, 192, 0.2)',
    },
  ],
};

function TrafficChart() {
  return (
    <div>
      <h2>Traffic Data</h2>
      <Line data={data} />
    </div>
  );
}

export default TrafficChart;
