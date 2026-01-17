"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ExpenseTable from "./ExpenseTable";

import { filterBasedOnDate } from "@/lib/date-filerting";
import { Expense } from "@/types/expense-types";

interface ExpenseTabsProps {
  expenseList: Expense[];
}

export default function ExpenseTabs({ expenseList }: ExpenseTabsProps) {

  const expenseLastWeek = filterBasedOnDate(expenseList, 7);
  const expenseLastMonth = filterBasedOnDate(expenseList, 30);
  const expenseLast3Months = filterBasedOnDate(expenseList, 90);
  return (
    <div className="w-full flex flex-col items-center px-4 py-6">
      <div className="w-full max-w-5xl">
        
        {/* Top Section (Future Add Button Space) */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Your Expenses</h2>
          {/* Reserved space for Add Expense button */}
          <div></div>
        </div>

        <Tabs defaultValue="week" className="w-full">
          {/* Responsive Tabs */}
          <TabsList className="w-full flex overflow-x-auto justify-start md:justify-center gap-2">
            <TabsTrigger value="week" className="flex-shrink-0">
              Last Week
            </TabsTrigger>
            <TabsTrigger value="month" className="flex-shrink-0">
              Last Month
            </TabsTrigger>
            <TabsTrigger value="three" className="flex-shrink-0">
              Last 3 Months
            </TabsTrigger>
          </TabsList>

          {/* Each Tab Content */}
          <TabsContent value="week">
            <ExpenseTable expenses={expenseList} label="Last Week" />
          </TabsContent>

          <TabsContent value="month">
            <ExpenseTable expenses={expenseList} label="Last Month" />
          </TabsContent>

          <TabsContent value="three">
            <ExpenseTable expenses={expenseList} label="Last 3 Months" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
