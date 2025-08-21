import { NextResponse } from "next/server";

export async function POST(req) {
  const { fullName, email, password } = await req.json();

  if (!fullName || !email || !password) {
    return NextResponse.json({ success: false, message: "All fields are required" });
  }

  // For demo: store user in a cookie (JSON string)
  const user = { fullName, email, password }; // In production, hash password

  const response = NextResponse.json({ success: true, message: "User registered" });

  // Store in cookie (HTTP-only)
  response.cookies.set({
    name: "signupUser", 
    value: JSON.stringify(user),
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24, // 1 day
  });

  return response;
}
