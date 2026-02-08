"use client";

import { buildCategoryData } from "@/lib/buildCategoryData";
import { Expense } from "@/types/expense-types";
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

type Props = {
  expenseList: Expense[],
  isAnimationActive?: boolean;
};

export default function CategoryBreakdown({
  expenseList,
  isAnimationActive = true,
}: Props) {


  const data = buildCategoryData(expenseList)
  console.log(data)

  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white h-[350px] flex flex-col">
      {/* Header */}
      <h3 className="text-lg font-semibold mb-3">
        Category Breakdown
      </h3>

      {/* Chart Area */}
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius="65%"
              outerRadius="85%"
              cornerRadius={10}
              paddingAngle={4}
              isAnimationActive={isAnimationActive}
            />

            {/* Hover tooltip */}
            <Tooltip
  formatter={(value: number, name: string) => [
    `£${value.toFixed(2)}`,
    name,
  ]}
  contentStyle={{
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    fontSize: "0.875rem",
  }}
/>

            <Legend
              verticalAlign="bottom"
              iconType="circle"
              wrapperStyle={{
                fontSize: "0.875rem",
                paddingTop: "8px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
