import { NextResponse } from "next/server";

export async function POST(req: Request) {
  

  const { email, password } = await req.json();

  const res = await fetch(`${process.env.SPRING_BASE_URL}/api/v1/auth/register`, {
    method: "POST",
    headers: {"content-type": "application/json"},
    body: JSON.stringify({email, password})
  });

  if(!res.ok) {
    return new NextResponse(await res.text(), {
      status: res.status
    })
  }
 
  const data = await res.json();

  // JWT Token
  const jwtToken = data.jwt;

  // Response 
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