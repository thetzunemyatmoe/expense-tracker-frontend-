import { cookies } from "next/headers";

export async function POST(req:Request) {
  const { id } = await req.json();
  const token = (await cookies()).get('auth_token')?.value;

  
  const res = await fetch(`${process.env.SPRING_BASE_URL}/api/v1/expenses/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return res;
}