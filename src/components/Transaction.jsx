import React from 'react';

const TransactionForm = () => {
  return (
    <form className="bg-white p-6 shadow-md rounded-md pt-20">
      <div className="mb-4">
        <label className="block text-gray-700">Amount</label>
        <input className="w-full p-2 border rounded-md" type="number" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Category</label>
        <select className="w-full p-2 border rounded-md">
          <option>Income</option>
          <option>Expense</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea className="w-full p-2 border rounded-md"></textarea>
      </div>
      <button className="w-full p-2 bg-blue-500 text-white rounded-md">
        Save Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
