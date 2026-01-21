import { filterBasedOnDate } from '@/lib/date-filerting';
import { getExpenseList } from '@/lib/fetch-expense';
import React from 'react'
import MonthlyTotalSpent from './components/MonthlyTotalSpent';

const DashboardPage = async () => {

  // Get the list of spending this month

  const expenseList = await getExpenseList();
  const expenseLastMonth = filterBasedOnDate(expenseList, 30);

  return (
    <div className="flex flex-col gap-6 p-6">

  {/* ⭐ AI Insights Widget (placeholder for later) */}
  <div className="border rounded-lg p-4 shadow-sm bg-black text-white">
    <h3 className="text-lg font-semibold">AI Insights</h3>
    <p className="text-sm text-neutral-300 mt-1">
      Your personal AI spending assistant will appear here...
    </p>
  </div>

  {/* ⭐ Summary Cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {/* Total Spent */}
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <MonthlyTotalSpent/>
    </div>

    {/* Transactions Count */}
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <p className="text-sm text-neutral-500">Transactions</p>
      <h2 className="text-2xl font-bold mt-1">0</h2>
    </div>

    {/* Highest Expense */}
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <p className="text-sm text-neutral-500">Highest Expense</p>
      <h2 className="text-2xl font-bold mt-1">£0.00</h2>
      <p className="text-xs text-neutral-400">—</p>
    </div>
  </div>

  {/* ⭐ Charts Row */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

    {/* Category Breakdown Chart */}
    <div className="border rounded-lg p-4 shadow-sm bg-white h-[350px]">
      <h3 className="text-lg font-semibold mb-2">Category Breakdown</h3>
      <div className="flex items-center justify-center h-full text-neutral-400">
        (Pie chart goes here)
      </div>
    </div>

    <div className="border rounded-lg p-4 shadow-sm bg-white h-[350px]">
      <h3 className="text-lg font-semibold mb-2">Spending Trend (Last 30 Days)</h3>
      <div className="flex items-center justify-center h-full text-neutral-400">
        (Line chart goes here)
      </div>
    </div>

  </div>

  <div className="border rounded-lg p-4 shadow-sm bg-white">
    <h3 className="text-lg font-semibold mb-3">Recent Expenses</h3>

    <div className="border rounded-md overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-neutral-100">
          <tr>
            <th className="text-left p-2 font-medium">Date</th>
            <th className="text-left p-2 font-medium">Title</th>
            <th className="text-left p-2 font-medium">Category</th>
            <th className="text-right p-2 font-medium">Amount</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-t">
            <td className="p-2 text-neutral-400">—</td>
            <td className="p-2 text-neutral-400">No recent expenses</td>
            <td className="p-2 text-neutral-400">—</td>
            <td className="p-2 text-right text-neutral-400">—</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>

  )
}

export default DashboardPage