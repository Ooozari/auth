"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Link from "next/link";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const signupData = Cookies.get("signupUser");

    if (!signupData) {
      alert("No account found. Please sign up first!");
      return;
    }
    let parsedData;
    try {
      parsedData = JSON.parse(signupData);
    } catch (err) {
      console.error("Error parsing cookie:", err);
      alert("There was an error reading your account data.");
      return;
    }

    const { email: registeredEmail, password: registeredPassword } = parsedData;

    if (email === registeredEmail && password === registeredPassword) {
      // Save user session
      Cookies.set("user", JSON.stringify({ email }), { expires: 1, path: "/" });
      router.push("/");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="w-full max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-4">
          Login
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-4">
          {"Dont have an account?"} <Link href="/signup" className="text-blue-600">Sign Up</Link> 

        </p>
      </div>
    </div>
  );
}

export default LoginPage;
