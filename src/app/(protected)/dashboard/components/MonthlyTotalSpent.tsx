import { Expense } from '@/types/expense-types'
import React from 'react'

interface MonthlyTotalSpentProps {
  expenseList: Expense[]
}
const MonthlyTotalSpent = ({expenseList}: MonthlyTotalSpentProps) => {

  console.log(expenseList)

  const total_amount = expenseList.map(expense => expense.amount).reduce(function (x, y) {
    return x + y
  }, 0);

  return (
     <div className="border rounded-lg p-4 shadow-sm bg-white">
      <p className="text-sm text-neutral-500">Total Spent (This Month)</p>
      <h2 className="text-2xl font-bold mt-1">£{total_amount}</h2>
    </div>
  )
}

export default MonthlyTotalSpent