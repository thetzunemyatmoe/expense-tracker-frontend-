"use client"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'

 
export const registerFormSchema = z
  .object({
    email: z.email("Enter a valid email"),
    password: z.string().min(7, "Password must be at least 7 characters").max(50),
    confirmPassword: z.string().min(7, "Password must be at least 7 characters").max(50),
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

  const router = useRouter();

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof registerFormSchema>) => {
    const res = await fetch("api/auth/register", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ email: values.email, password: values.password})
    });

    if (!res.ok) {
      toast.error("Error registering")
      return
    }

    router.push('/')


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

          
          <Button 
            type="submit"
            disabled={form.formState.isSubmitting || !form.formState.isValid}
            >
              {form.formState.isSubmitting ? "Processing" : "Register"}
          </Button>
      </form>
    </Form>
  )
}


export default RegisterPage;