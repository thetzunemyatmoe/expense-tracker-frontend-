import { filterBasedOnDate } from '@/lib/date-filerting';
import { getExpenseList } from '@/lib/fetch-expense';
import React from 'react'
import MonthlyTotalSpent from './components/MonthlyTotalSpent';
import TotalTransactions from './components/TotalTransactions';
import HighestExpese from './components/HighestExpese';
import { generateInsight } from '@/lib/ai';
import { Expense } from '@/types/expense-types';
import CategoryBreakdown from './components/CategoryBreakdown';

const DashboardPage = async () => {

  // Get the list of spending this month

  const expenseList = await getExpenseList();
  const expenseLastMonth = filterBasedOnDate(expenseList, 30);


  // TODO : Uncomment
  // const insight = await generateInsight(list_of_expense);


  

  return (
    <div className="flex flex-col gap-6 p-6">

  {/* ⭐ AI Insights Widget (placeholder for later) */}
  

  {/* ⭐ Summary Cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {/* Total Spent */}
    <MonthlyTotalSpent expenseList={expenseLastMonth}/>

    {/* Transactions Count */}
    <TotalTransactions expenseList={expenseList}/>
    
    {/* Highest Expense */}
    <HighestExpese expenseList={expenseList}/>
  </div>

  {/* ⭐ Charts Row */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

    {/* Category Breakdown Chart */}
    <CategoryBreakdown expenseList={expenseList}/>

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