"use client";

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Expense } from "@/types/expense-types";
import { MoreHorizontalIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

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

  const router = useRouter();


  const handleDelete = async (id: number) => {
    const res = await fetch(`/api/expense/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id })
    })

    if(!res.ok) {
      toast.error("Error deleting")
      return;
    }

    toast.success("Deleted")
    router.refresh();
  }
  return (
  <div className="mt-4 w-full">
    
    {/* Header row with Label + Add Button */}
    <div className="flex items-center justify-between mb-3">
      {label && <h3 className="text-lg font-semibold">{label}</h3>}

      {/* Add Expense Button (UI only) */}
      <button
        className="px-4 py-2 bg-black text-white rounded-md text-sm hover:bg-neutral-800 transition"
        onClick={() => router.push('/expenses/add')}
      >
        + Add Expense
      </button>
    </div>

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

              {/* Category Badge */}
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

              {/* Future actions */}
              <TableCell className="text-right">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="size-8">
                  <MoreHorizontalIcon />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => router.push(`expenses/${expense.id}/edit`)}>Edit</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleDelete(expense.id)} variant="destructive">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>

  </div>
);

}
