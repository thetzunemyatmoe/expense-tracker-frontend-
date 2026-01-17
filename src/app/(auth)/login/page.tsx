
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import LoginPageClient from './LoginPageClient';
import { checkTokenValid } from '@/lib/checkTokenValidity';

const LoginPageServer = async () => {
   const token = (await cookies()).get('auth_token')?.value;

   if (token) {
      const isValidToken = await checkTokenValid(token)
      if (isValidToken) {
        redirect("/dashboard")
      }
   }
  return (
    <LoginPageClient/>
  )
}

export default LoginPageServer