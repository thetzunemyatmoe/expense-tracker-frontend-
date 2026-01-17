import { getExpenseList } from '@/lib/getExpenseList'
import { ExpenseTabs } from './components/ExpenseTabs';
import { Expense } from '@/types/expense-types';

const ExpenseList = async () => {

  const expenseList : Expense[] = await getExpenseList();
  return (
    <ExpenseTabs expenseList={expenseList}/>
  )
}


export default ExpenseList