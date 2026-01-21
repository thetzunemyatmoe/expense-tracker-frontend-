import { cookies } from "next/headers";

export async function POST(req: Request) {
  const token = (await cookies()).get("auth_token")?.value;

  const {id, title, preCategory, amount} = await req.json()

  let category = preCategory;

  

  const res = await fetch(`${process.env.SPRING_BASE_URL}/api/v1/expenses/${id}`, {
    method: "PATCH",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({title, category, amount})
  })

  return res;
}