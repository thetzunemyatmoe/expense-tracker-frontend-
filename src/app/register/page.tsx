"use client"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export const registerFormSchema = z
  .object({
    email: z.email("Enter a valid email"),
    password: z.string().min(8, "Password must be at least 8 characters").max(50),
    confirmPassword: z.string().min(7).max(50),
  })
  .superRefine(({password, confirmPassword}, ctx) => {
    if(password !== confirmPassword) {
       ctx.addIssue({
        code: "custom",
        path: ["confirmPassword"],
        message: "Passwords do not match"

       })
    }
  })


const RegisterPage = () => {

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  const onSubmit = (values: z.infer<typeof registerFormSchema>) => {
  console.log(values);
}


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Email field */}
        <FormField 
          control={form.control}
          name="email"
          
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} type='email'/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}/>

          {/* Password field */}
          <FormField 
          control={form.control}
          name="password"
          
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter password" {...field} type='password'/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}/>

          {/* Matching Password field */}
          <FormField 
          control={form.control}
          name="confirmPassword"
          
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input placeholder="Confirm password" {...field} type='password'/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}/>

          
          <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}


export default RegisterPage;