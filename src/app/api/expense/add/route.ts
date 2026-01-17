import { cookies } from "next/headers";

export async function POST(req: Request) {
  const {title, amount, category} = await req.json();
  const token = (await cookies()).get('auth_token')?.value;

  const res = await fetch(`${process.env.SPRING_BASE_URL}/api/v1/expenses/`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({title, amount, category})
  })

  return res;
} 