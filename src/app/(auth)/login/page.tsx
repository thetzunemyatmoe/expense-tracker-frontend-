
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import LoginPageClient from './LoginPageClient';

const LoginPageServer = async () => {
   const token = (await cookies()).get('auth_token')?.value;

   if (token) {
      const res = await fetch(`${process.env.SPRING_BASE_URL}/api/v1/auth/login`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      })

      if (res.ok) {
        redirect("/")
      }


   }
  return (
    <LoginPageClient/>
  )
}

export default LoginPageServer