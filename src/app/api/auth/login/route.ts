import { ok } from "assert";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
   const { email, password } = await req.json();

   const res = await fetch(`${process.env.SPRING_BASE_URL}/api/v1/auth/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({email, password})
   });
   
   if (!res.ok) {
    const message = await res.text();


    return new NextResponse(message, {
      status: res.status
    })
   }

   const data = await res.json();


   const jwtToken = data.jwt;

   const response = NextResponse.json(
    {
      ok: true
    }
   );

   response.cookies.set("auth_token", jwtToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24
   });

   return response;

}