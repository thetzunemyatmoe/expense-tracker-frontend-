"use client"
import React from 'react'
import { z } from 'zod'

export const registerSchema = z
  .object({
    email: z.email("Enter a valid email"),
    password: z.string().min(8, "Password must be at least 8 characters").max(50),
    confirmPassword: z.string().min(8).max(50),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

const RegisterPage = () => {
  return (
    <div>RegisterPage</div>
  )
}

export default RegisterPage