"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Expense } from "@/types/expense";

// Category → Color mapping
const categoryColor = {
  GROCERIES: "bg-green-100 text-green-800",
  LEISURE: "bg-yellow-100 text-yellow-800",
  ELECTRONICS: "bg-blue-100 text-blue-800",
  UTILITIES: "bg-gray-100 text-gray-800",
  CLOTHING: "bg-purple-100 text-purple-800",
  HEALTH: "bg-red-100 text-red-800",
  OTHERS: "bg-slate-200 text-slate-800",
};

interface ExpenseTableProps {
  expenses: Expense[];
  label?: string;
}

export default function ExpenseTable({ expenses, label }: ExpenseTableProps) {
  return (
    <div className="mt-4 w-full">
      {/* Optional Label */}
      {label && <h3 className="text-lg font-medium mb-3">{label}</h3>}

      {/* Responsive Table Container */}
      <div className="w-full overflow-x-auto border rounded-md">
        <Table className="min-w-[700px]">
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold">Date</TableHead>
              <TableHead className="font-semibold">Title</TableHead>
              <TableHead className="font-semibold">Category</TableHead>
              <TableHead className="text-right font-semibold">Amount (£)</TableHead>
              <TableHead className="text-right font-semibold">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {expenses.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center text-sm text-muted-foreground py-6"
                >
                  No expenses found.
                </TableCell>
              </TableRow>
            )}

            {expenses.map((expense) => (
              <TableRow key={expense.id}>
                <TableCell>
                  {expense.addedAt instanceof Date
                    ? expense.addedAt.toLocaleDateString()
                    : String(expense.addedAt).slice(0, 10)}
                </TableCell>

                <TableCell>{expense.title}</TableCell>

                {/* Category with badge styling */}
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-md text-xs font-medium ${
                      categoryColor[expense.category] ??
                      "bg-slate-200 text-slate-800"
                    }`}
                  >
                    {expense.category}
                  </span>
                </TableCell>

                <TableCell className="text-right font-medium">
                  £{expense.amount.toFixed(2)}
                </TableCell>

                {/* Actions placeholder */}
                <TableCell className="text-right">
                  <div className="opacity-50 text-sm">
                    {/* Future action buttons → Edit/Delete */}
                    ...
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
