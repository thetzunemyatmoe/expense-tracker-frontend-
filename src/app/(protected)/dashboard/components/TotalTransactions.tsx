import { Expense } from '@/types/expense-types'
import React from 'react'


interface TotalTransactionsProps {
  expenseList: Expense[]
}


const TotalTransactions = ({expenseList}: TotalTransactionsProps) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <p className="text-sm text-neutral-500">Transactions</p>
      <h2 className="text-2xl font-bold mt-1">{expenseList.length}</h2>
    </div>
  )
}

export default TotalTransactions