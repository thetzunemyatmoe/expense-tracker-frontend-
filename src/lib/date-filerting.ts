import { Expense } from "@/types/expense-types";

function isWithinDate(date: Date, days: number): boolean {
  const now = new Date();
  const past = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);

  return date >= past && date <= now;
}

export function filterBasedOnDate(expense: Expense[], days: number) {
  return expense.filter(exp => isWithinDate(exp.addedAt, days))
}