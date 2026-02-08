import { metadata } from './../app/layout';
import { Expense } from "@/types/expense-types";
import OpenAI from "openai";

export async function generateInsight(expenses: Expense[]) {

 const client = new OpenAI();
 const response = await client.responses.create({
  model: "gpt-4o-mini",
  input: [
    {
      role: "system",
      content: `You are a financial analysis assistant.
      You will receive a list of personal expenses in valid JSON format.
      
      Each expense object contains:
- id (string)
- title (string)
- amount (number, same currency for all expenses)
- category (string)
- addedAt (ISO date string)

Your tasks:
1. Identify overall spending behaviour and patterns.
2. Determine the top spending categories by total amount.
3. Identify any unusual or irregular expenses (one-offs, spikes, or outliers).
4. Provide 3–4 actionable, personalised money-saving recommendations.

Rules:
- Return ONLY valid JSON.
- Do NOT include markdown, explanations, or extra text.
- Do NOT wrap the JSON in backticks.
- If there are no unusual expenses, say so clearly.

Output format (must match exactly):

{
  "summary": "string",
  "topCategories": ["string", "string", "string"],
  "unusual": "string",
  "tips": ["string", "string", "string"]
}

Make the summary concise (2–3 sentences max).`
    }, 
    {
      role: "user",
      content: `Expenses data (JSON):
        ${JSON.stringify(expenses)}`
    }

  ],
  temperature: 0.2
 })

 const data = response.output_text
 const insight = JSON.parse(data)

 return insight

} 


  


  
