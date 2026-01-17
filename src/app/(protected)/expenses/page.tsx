import { getExpenseList } from '@/lib/getExpenseList'
import { ExpenseTabs } from './components/ExpenseTabs';

const ExpenseList = async () => {

  const expenseList = await getExpenseList();
  console.log(expenseList)


  return (
    <ExpenseTabs expenseList={expenseList}/>
  )
}


export default ExpenseList