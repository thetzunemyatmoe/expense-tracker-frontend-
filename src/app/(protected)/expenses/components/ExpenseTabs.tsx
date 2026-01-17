"use client"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import ExpenseTable from "./ExpenseTable"
import { Expense } from "@/types/expense-types"
import { filterBasedOnDate } from "@/lib/date-filerting"

export function ExpenseTabs({expenseList} : { expenseList: Expense[] }) {

  const expenseLastWeek = filterBasedOnDate(expenseList, 7);
  const expenseLastMonth = filterBasedOnDate(expenseList, 30);
  const expenseLast3Months = filterBasedOnDate(expenseList, 90);

  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="lastweek">
        <TabsList>
          <TabsTrigger value="lastweek">Within last week</TabsTrigger>
          <TabsTrigger value="last1month">Within last Month</TabsTrigger>
          <TabsTrigger value="last3months">Within last 3 Months</TabsTrigger>
        </TabsList>
        <TabsContent value="lastweek">
          <Card>
            <CardHeader>
              <CardTitle>Within last week</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <ExpenseTable expenses={expenseLastWeek}/>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="last1month">
          <Card>
            <CardHeader>
              <CardTitle>Within last month</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <ExpenseTable expenses={expenseLastMonth}/>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="last3months">
          <Card>
            <CardHeader>
              <CardTitle>Within last months</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <ExpenseTable expenses={expenseLast3Months}/>
            </CardContent>
          </Card>
        </TabsContent>
        
      </Tabs>
    </div>
  )
}
