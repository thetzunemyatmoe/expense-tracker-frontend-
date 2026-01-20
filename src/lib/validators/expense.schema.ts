import { z } from "zod";
export const ExpenseSchema = z.object({
  title: z.string().min(2, "Enter a valid title"),
  amount: z.preprocess(
  (val) => val === "" ? undefined : Number(val),
  z.number().positive("Amount must be greater than 0")
),
  category: z.string().min(1, "Category is required"),
});

export type ExpenseFormValues = z.infer<typeof ExpenseSchema>;