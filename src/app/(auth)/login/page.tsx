"use client"
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import toast from 'react-hot-toast'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


export const loginFormSchema = z
  .object({
    email: z.email("Enter a valid email"),
    password: z.string().min(7, "Password must be at least 7 characters").max(50),
  })

const LoginPage = () => {

  const router = useRouter();

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit = async(values: z.infer<typeof loginFormSchema>) => {
    const res = await fetch("api/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ email: values.email, password: values.password })
    });

    if(!res.ok) {
      toast.error("Error registering")
      return
    }

    router.push("/")
  }

  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField 
          control={form.control}
          name='email'

          render={({field}) => (
            <FormItem>
              <div className="space-y-2 text-center mb-6">
                <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
              </div>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} type='email'/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />

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

          <Button
            type="submit"
            className="w-full"
            disabled={form.formState.isSubmitting || !form.formState.isValid}>
              {form.formState.isSubmitting ? "Processing..." : "Login"}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="font-medium text-foreground underline underline-offset-4">
                Register
              </Link>
          </p>
      </form>
    </Form>
  )
}

export default LoginPage