import { AppWindowIcon, CodeIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import ExpenseTable from "./ExpenseTable"

export function ExpenseTabs({expenseList}) {
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
              <ExpenseTable/>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="last1month">
          <Card>
            <CardHeader>
              <CardTitle>Within last month</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <ExpenseTable/>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="last3months">
          <Card>
            <CardHeader>
              <CardTitle>Within last months</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <ExpenseTable/>
            </CardContent>
          </Card>
        </TabsContent>
        
      </Tabs>
    </div>
  )
}
