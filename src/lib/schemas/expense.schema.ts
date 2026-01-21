import { z } from "zod";
export const ExpenseSchema = z.object({
  title: z.string().min(2, "Enter a valid title"),
  amount: z.preprocess(
  (val) => val === "" ? undefined : Number(val),
  z.number().positive("Amount must be greater than 0")
),
  preCategory: z
  .enum([
    "GROCERIES",
    "LEISURE",
    "ELECTRONICS",
    "UTILITIES",
    "CLOTHING",
    "HEALTH",
    "OTHERS",
  ])
  .optional(),
});

export type ExpenseFormValues = z.infer<typeof ExpenseSchema>;