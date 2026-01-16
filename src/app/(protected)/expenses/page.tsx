import { getExpenseList } from '@/lib/getExpenseList'
import { ExpenseTabs } from './components/ExpenseTabs';

const ExpenseList = async () => {

  const expenseList = await getExpenseList();

  return (
    <ExpenseTabs expenseList={expenseList}/>
  )
}


export default ExpenseList