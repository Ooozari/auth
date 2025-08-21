'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export function useAuthRedirect() {
  const router = useRouter();
  useEffect(() => {
    const user = Cookies.get("user");
    if (!user) router.replace("/login");
  }, [router]);
}
