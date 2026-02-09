import { Expense } from "@/types/expense-types";
import { filterBasedOnDate } from "./date-filerting";


export function getDailySpending(expenses: Expense[], days = 7) {
  const recentExpenses = filterBasedOnDate(expenses, days);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const dayMap = new Map<string, number>();

  // Create empty buckets
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);

    const key = d.toISOString().split("T")[0];
    dayMap.set(key, 0);
  }

  // Fill buckets
  recentExpenses.forEach(exp => {
    const d = new Date(exp.addedAt);
    d.setHours(0, 0, 0, 0);

    const key = d.toISOString().split("T")[0];
    if (dayMap.has(key)) {
      dayMap.set(key, dayMap.get(key)! + exp.amount);
    }
  });

  // Format for Recharts
  return Array.from(dayMap.entries()).map(([date, total]) => ({
    date: new Date(date).toLocaleDateString("en-GB", {
      weekday: "short",
    }),
    total,
  }));
}
