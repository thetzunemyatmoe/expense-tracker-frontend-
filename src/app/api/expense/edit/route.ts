import { cookies } from "next/headers";

export async function POST(req: Request) {
  const token = (await cookies()).get("auth_token")?.value;

  const {id, title, category, amount} = await req.json()

  const res = await fetch(`${process.env.SPRING_BASE_URL}/api/v1/expenses/${id}`, {
    method: "PATCH",
    headers: {
      "Authorization": `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({title, category, amount})
  })

  return res;
}