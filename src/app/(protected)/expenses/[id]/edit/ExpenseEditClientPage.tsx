"use client"

import { z } from "zod";
import toast from "react-hot-toast";
import { ExpenseSchema } from "@/lib/schemas/expense.schema";
import ExpenseForm from "@/app/(protected)/expenses/components/ExpenseForm";

import { Expense } from "@/types/expense-types";
import { useRouter } from "next/navigation";

interface ExpenseEditClientPageProps {
  expense: Expense
}

const ExpenseEditClientPage = ({ expense } : ExpenseEditClientPageProps) => {
  
  const router = useRouter();
  const onSubmit = async (values: z.infer<typeof ExpenseSchema>) => {
    const res = await fetch(`/api/expense/edit`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        id: expense.id,
        title: values.title,
        amount: values.amount,
        preCategory: values.preCategory
      })
    })

    if (!res.ok) {
      toast.error("Error updating")
      return
    }

    toast.success("Update successful")
    router.push("/expenses")
  };

  return (
    <ExpenseForm 
    initialValues={{title: expense.title, amount: expense.amount, preCategory: expense.category}}
    onSubmit={onSubmit}
    buttonLabel="Save Changes"
  />
  )
}

export default ExpenseEditClientPage