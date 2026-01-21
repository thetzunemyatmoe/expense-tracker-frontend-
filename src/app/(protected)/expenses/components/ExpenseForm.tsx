"use client"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ExpenseFormValues, ExpenseSchema } from "@/lib/schemas/expense.schema";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface ExpensFormProps {
  initialValues: ExpenseFormValues,
  onSubmit: (values: ExpenseFormValues, id?: number) => Promise<void> | void,
  buttonLabel: string;
}

type Category =
  | "GROCERIES"
  | "LEISURE"
  | "ELECTRONICS"
  | "UTILITIES"
  | "CLOTHING"
  | "HEALTH"
  | "OTHERS"
  | "AUTO";



const ExpenseForm = ({initialValues, onSubmit, buttonLabel}: ExpensFormProps ) => {

  const router = useRouter();

  const form = useForm<z.infer<typeof ExpenseSchema>>({
    resolver: zodResolver(ExpenseSchema),
    defaultValues: {
      title: initialValues.title,
      amount: initialValues.amount, 
      preCategory: initialValues.preCategory
},
    mode: "onChange",
  });


  return (
    <div>
      <div className="flex justify-center px-4 py-8">
      <div className="w-full max-w-xl">
        
        {/* Page Header */}
        <h1 className="text-2xl font-semibold mb-6">Add Expense</h1>

        {/* Form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 border rounded-lg p-6 shadow-sm bg-white"
          >

            {/* Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Expense title..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

<FormField
  control={form.control}
  name="amount"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Amount (£)</FormLabel>
      <FormControl>
        <Input
          type="number"
          step="0.01"
          {...field}
          onChange={(e) => field.onChange(e.target.value)}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>


            {/* Category */}
            <FormField
  control={form.control}
  name="preCategory"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Category</FormLabel>

      <Select
        value={field.value ?? "AUTO"}
        onValueChange={(value) => {
          field.onChange(value === "AUTO" ? undefined : value);
        }}
      >
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Auto (AI will decide)" />
          </SelectTrigger>
        </FormControl>

        <SelectContent>
          <SelectItem value="AUTO">Auto (AI)</SelectItem>
          <SelectItem value="GROCERIES">Groceries</SelectItem>
          <SelectItem value="LEISURE">Leisure</SelectItem>
          <SelectItem value="ELECTRONICS">Electronics</SelectItem>
          <SelectItem value="UTILITIES">Utilities</SelectItem>
          <SelectItem value="CLOTHING">Clothing</SelectItem>
          <SelectItem value="HEALTH">Health</SelectItem>
          <SelectItem value="OTHERS">Others</SelectItem>
        </SelectContent>
      </Select>

      <FormMessage />
    </FormItem>
  )}
/>



        

            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-4">
              <Button variant="outline" type="button" onClick={() => router.back()}>
                Cancel
              </Button>

              <Button
                type="submit"
                disabled={form.formState.isSubmitting || !form.formState.isValid}
              >
                {form.formState.isSubmitting ? "Saving..." : buttonLabel}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>

    </div>
  )
}

export default ExpenseForm

