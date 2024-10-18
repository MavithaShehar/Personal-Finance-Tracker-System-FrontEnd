import React from 'react';

const Dashboard = () => {
  // Dummy data
  const totalIncome = 5000;
  const totalExpenses = 2000;
  const currentBalance = totalIncome - totalExpenses;

  return (
    <div className="p-6 bg-gray-100 min-h-screen pt-20">
      <h1 className="text-2xl font-bold mb-6">Personal Finance Dashboard</h1>
      
      {/* Summary section */}
      <div className="p-4 bg-blue-100 shadow-md rounded-lg mb-6">
        <p>Welcome to your personal finance dashboard. Track your income, expenses, and current balance below.</p>
      </div>

      {/* Grid layout for financial data */}
      <div className="grid grid-cols-3 gap-4">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-semibold">Total Income</h2>
          <p className="text-green-500 text-xl font-bold">${totalIncome}</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-semibold">Total Expenses</h2>
          <p className="text-red-500 text-xl font-bold">${totalExpenses}</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-semibold">Current Balance</h2>
          <p className="text-blue-500 text-xl font-bold">${currentBalance}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
