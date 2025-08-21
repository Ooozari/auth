// hooks/useAuthRedirect.js
"use client";

import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export function useAuthRedirect() {
  const router = useRouter();
  const user = Cookies.get("user");

  useEffect(() => {
    const path = window.location.pathname;
    const publicPaths = ["/login", "/signup"];

    if (user && publicPaths.includes(path)) {
      router.replace("/"); // logged-in user shouldn't access login/signup
    }

    if (!user && !publicPaths.includes(path)) {
      router.replace("/login"); // not-logged-in user shouldn't access private pages
    }
  }, [user, router]);
}
