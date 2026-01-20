"use client";

import { z } from "zod";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { ExpenseSchema } from "@/lib/validators/expense.schema";
import ExpenseForm from "@/components/ExpenseForm";

export default function AddExpensePage() {
  
  const router = useRouter();
  const onSubmit = async (values: z.infer<typeof ExpenseSchema>) => {
    const res = await fetch(`/api/expense/add`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        title: values.title,
        amount: values.amount,
        category: values.category
      })
    })

    if (!res.ok) {
      toast.error("Error adding")
      return
    }
    toast.success("Expense Added")
    router.push("/expenses")
  };

  return <ExpenseForm 
    initialValues={{title: "", amount: 0, category: ""}}
    onSubmit={onSubmit}
    buttonLabel="Add Expense"
  />
}
