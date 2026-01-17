"use client";

import { Expense } from "@/types/expense-types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


export function ExpenseTable({ expenses }: {expenses: Expense[]}) {
  return (
    <div className="w-full border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Amount (£)</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {expenses.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={4}
                className="text-center text-sm text-muted-foreground py-6"
              >
                No expenses to show.
              </TableCell>
            </TableRow>
          )}

          {expenses.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell>{expense.addedAt.toLocaleDateString("en-UK", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}</TableCell>
              <TableCell>{expense.title}</TableCell>
              <TableCell>{expense.category}</TableCell>
              <TableCell className="text-right">
                £{expense.amount.toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ExpenseTable;
