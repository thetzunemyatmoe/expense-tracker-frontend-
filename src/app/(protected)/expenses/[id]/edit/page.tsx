
import { getExpenseById } from "@/lib/fetch-expense";
import { Expense } from "@/types/expense-types";
import ExpenseEditClientPage from "./ExpenseEditClientPage";

interface ExpenseEditPageProps {
  params: Promise<{ id: string }>
}

const ExpenseEditPage = async ({ params }: ExpenseEditPageProps) => {
  const { id } = await params;
  const data : Expense = await getExpenseById(Number(id));

  return <ExpenseEditClientPage expense={data}/>

};

export default ExpenseEditPage;
