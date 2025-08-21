import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });
  response.cookies.set({
    name: "user",
    value: "",
    httpOnly: true,
    path: "/",
    maxAge: 0, // delete cookie
  });
  return response;
}
