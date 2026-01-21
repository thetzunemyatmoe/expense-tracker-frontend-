import { cookies } from "next/headers";
import OpenAI from "openai";

export async function POST(req: Request) {
  const { title, amount, preCategory } = await req.json();
  const token = (await cookies()).get('auth_token')?.value;

  let category = preCategory;

    if (!category) {
      const client = new OpenAI();
      const response = await client.responses.create({
        model: "gpt-4o-mini",
        input: `Choose the most appropriate expense category.
                  Title: ${title}
                  Amount: ${amount}
                  
                  Return ONLY one of:
                  GROCERIES, LEISURE, ELECTRONICS, UTILITIES, CLOTHING, HEALTH, OTHERS`
      });
      category = response.output_text
  }

  console.log('final category is', category)
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