import { filterBasedOnDate } from '@/lib/date-filerting';
import { getExpenseList } from '@/lib/fetch-expense';
import React from 'react'
import MonthlyTotalSpent from './components/MonthlyTotalSpent';
import TotalTransactions from './components/TotalTransactions';
import HighestExpese from './components/HighestExpese';
import { generateInsight } from '@/lib/ai';
import { Expense } from '@/types/expense-types';

const DashboardPage = async () => {

  // Get the list of spending this month

  const expenseList = await getExpenseList();
  const expenseLastMonth = filterBasedOnDate(expenseList, 30);

  const list_of_expense: Expense[] = [
  {
    id: 1,
    title: "Tesco Groceries",
    amount: 45.3,
    category: "GROCERIES",
    addedAt: new Date("2026-01-03T18:42:00Z"),
    userId: 101
  },
  {
    id: 2,
    title: "Pret A Manger",
    amount: 6.8,
    category: "FOOD_OUT",
    addedAt: new Date("2026-01-04T08:15:00Z"),
    userId: 101
  },
  {
    id: 3,
    title: "Uber Ride",
    amount: 14.5,
    category: "TRANSPORT",
    addedAt: new Date("2026-01-04T22:10:00Z"),
    userId: 101
  },
  {
    id: 4,
    title: "Netflix Subscription",
    amount: 15.99,
    category: "ENTERTAINMENT",
    addedAt: new Date("2026-01-05T00:02:00Z"),
    userId: 101
  },
  {
    id: 5,
    title: "Gym Membership",
    amount: 39.99,
    category: "HEALTH",
    addedAt: new Date("2026-01-05T07:30:00Z"),
    userId: 101
  },
  {
    id: 6,
    title: "Amazon Electronics",
    amount: 289.99,
    category: "ELECTRONICS",
    addedAt: new Date("2026-01-06T14:05:00Z"),
    userId: 101
  },
  {
    id: 7,
    title: "Starbucks",
    amount: 4.75,
    category: "FOOD_OUT",
    addedAt: new Date("2026-01-06T09:10:00Z"),
    userId: 101
  },
  {
    id: 8,
    title: "Train Ticket",
    amount: 62.0,
    category: "TRANSPORT",
    addedAt: new Date("2026-01-07T17:55:00Z"),
    userId: 101
  },
  {
    id: 9,
    title: "Zara Clothing",
    amount: 120.0,
    category: "SHOPPING",
    addedAt: new Date("2026-01-08T16:20:00Z"),
    userId: 101
  },
  {
    id: 10,
    title: "Dinner with Friends",
    amount: 78.5,
    category: "FOOD_OUT",
    addedAt: new Date("2026-01-09T21:40:00Z"),
    userId: 101
  }
]


  const insight = generateInsight(list_of_expense);

  

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