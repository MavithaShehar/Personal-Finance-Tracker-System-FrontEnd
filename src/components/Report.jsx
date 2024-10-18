import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

const data = [
  { name: 'Income', value: 600 },
  { name: 'Expenses', value: 300 },
];

const Report = () => {
  return (
    <PieChart width={400} height={400}>
      <Pie dataKey="value" data={data} cx="50%" cy="50%" outerRadius={100} fill="#82ca9d" />
      <Tooltip />
    </PieChart>
  );
};

export default Report;
