import { Expense } from "@/types/expense-types";

type ChartData = {
  name: string;
  value: number;
  fill: string;
};

// Hard-coded chart colors per category
const categoryChartColor: Record<string, string> = {
  GROCERIES: "#22C55E",
  LEISURE: "#EAB308",
  ELECTRONICS: "#3B82F6",
  UTILITIES: "#6B7280",
  CLOTHING: "#A855F7",
  HEALTH: "#EF4444",
  OTHERS: "#64748B",
};

export function buildCategoryData(expenses: Expense[]): ChartData[] {
  const totalsByCategory: Record<string, number> = {};

  for (const expense of expenses) {
    totalsByCategory[expense.category] =
      (totalsByCategory[expense.category] || 0) + expense.amount;
  }

  return Object.entries(totalsByCategory).map(
    ([category, total]) => ({
      name: category,
      value: total,
      fill:
        categoryChartColor[category] ??
        categoryChartColor.OTHERS,
    })
  );
}
