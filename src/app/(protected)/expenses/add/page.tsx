"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
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

// ----------------------
// ZOD SCHEMA (UI ONLY)
// ----------------------
const addExpenseSchema = z.object({
  title: z.string().min(2, "Enter a valid title"),
  amount: z.preprocess(
  (val) => val === "" ? undefined : Number(val),
  z.number().positive("Amount must be greater than 0")
),
  category: z.string().min(1, "Category is required"),
});

export default function AddExpensePage() {
  const form = useForm<z.infer<typeof addExpenseSchema>>({
    resolver: zodResolver(addExpenseSchema),
    defaultValues: {
  title: "",
  amount: "",   // ← must be string
  category: ""
},

    mode: "onChange",
  });

  const onSubmit = (values: z.infer<typeof addExpenseSchema>) => {
    console.log("Form submitted:", values); // UI ONLY
  };

  return (
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
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
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
              <Button variant="outline" type="button">
                Cancel
              </Button>

              <Button
                type="submit"
                disabled={form.formState.isSubmitting || !form.formState.isValid}
              >
                {form.formState.isSubmitting ? "Saving..." : "Save Expense"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
