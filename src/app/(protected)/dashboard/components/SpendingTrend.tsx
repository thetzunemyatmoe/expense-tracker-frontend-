"use client";

import { getDailySpending } from "@/lib/getDailySpending";
import { Expense } from "@/types/expense-types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface SpendingTrendProps {
  expenseList: Expense[]
}


const SpendingTrend = ({expenseList}: SpendingTrendProps) => {
  const data = getDailySpending(expenseList, 7);

  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white h-[350px]">
      <h3 className="text-lg font-semibold mb-4">
        Spending Trend (Last 7 Days)
      </h3>

      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data}>
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            className="text-xs"
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            className="text-xs"
          />
          <Tooltip
            formatter={(value: number) => [`£${value}`, "Spent"]}
            contentStyle={{
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
              fontSize: "0.875rem",
            }}
          />
          <Bar dataKey="total" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SpendingTrend;
