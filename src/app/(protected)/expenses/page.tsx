import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'


const ExpenseList = async () => {
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

  const expenseList = await res.json();

  console.log(expenseList)

  return (
    <div></div>
  )
}


export default ExpenseList