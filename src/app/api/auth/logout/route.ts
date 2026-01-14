import { ok } from "assert";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function POST(req: Request) {

  const response = NextResponse.json(
    {
      ok: true
    }
  );

  response.cookies.set("auth_token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0
  });

  return response;
  
}