import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, password } = await req.json();

  const usersCookie = req.cookies.get("signupUser")?.value;
  if (!usersCookie) {
    return NextResponse.json({ success: false, message: "No registered users" });
  }

  const user = JSON.parse(usersCookie);

  if (email === user.email && password === user.password) {
    // Set session cookie
    const response = NextResponse.json({ success: true });
    response.cookies.set({
      name: "user",
      value: JSON.stringify({ email }),
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24,
    });
    return response;
  } else {
    return NextResponse.json({ success: false, message: "Invalid credentials" });
  }
}
