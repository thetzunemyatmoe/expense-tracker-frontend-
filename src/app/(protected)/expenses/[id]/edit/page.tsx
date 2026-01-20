interface ExpenseEditPageProps {
  params: Promise<{ id: string }>
}

const ExpenseEditPage = async ({ params }: ExpenseEditPageProps) => {

  const { id } = await params;
  console.log("Expense ID:",id);

  return <div>ExpenseEditPage</div>;
};

export default ExpenseEditPage;
