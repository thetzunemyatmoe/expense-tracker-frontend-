
import { getExpenseById } from "@/lib/getExpenseList";
import { Expense } from "@/types/expense-types";
import ExpenseEditClientPage from "./component/ExpenseEditClientPage";

interface ExpenseEditPageProps {
  params: Promise<{ id: string }>
}

const ExpenseEditPage = async ({ params }: ExpenseEditPageProps) => {

  const { id } = await params;

  const data : Expense = await getExpenseById(Number(id));


  return <ExpenseEditClientPage expense={data}/>

};

export default ExpenseEditPage;
