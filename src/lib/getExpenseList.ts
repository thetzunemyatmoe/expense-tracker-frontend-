import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { toJsDate } from "./toJSDate";
import { Expense } from "@/types/expense-types";

export async function getExpenseList() {
  const token = (await cookies()).get("auth_token")?.value;
  const res = await fetch(`${process.env.SPRING_BASE_URL}/api/v1/expenses`, {
    headers: {
      "Authorization": `Bearer ${token}`
    },
    cache: "no-store"
  })

  if(res.status === 401 || res.status === 403 ) {
    redirect("/login")
  }

  const data : Expense[] = await res.json();

  const formattedData = data.map(exp => ({
    ...exp,
    addedAt: toJsDate(exp.addedAt)
  }))


  return formattedData;


}