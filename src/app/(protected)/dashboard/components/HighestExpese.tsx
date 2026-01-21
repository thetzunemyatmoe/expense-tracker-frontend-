import { Expense } from '@/types/expense-types'
import React from 'react'

interface HighestExpeseProps {
  expenseList: Expense[]
}

const HighestExpese = ({expenseList} : HighestExpeseProps) => {

  const highestExpese : Expense | null = expenseList.length ? expenseList.reduce((max, exp) => exp.amount > max.amount ? exp : max): null;
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <p className="text-sm text-neutral-500">Highest Expense</p>
      <h2 className="text-2xl font-bold mt-1">£{highestExpese ? highestExpese.amount : "Empty"}</h2>
      <p className="text-xs text-neutral-400">—</p>
    </div>
  )
}

export default HighestExpese