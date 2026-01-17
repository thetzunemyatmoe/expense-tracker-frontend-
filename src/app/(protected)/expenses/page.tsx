import ExpenseTabs from "./components/ExpenseTabs";
import { getExpenseList } from "@/lib/getExpenseList";

export default async function ExpenseListPage() {
  const expenseList = await getExpenseList();

  return <ExpenseTabs expenseList={expenseList} />;
}
