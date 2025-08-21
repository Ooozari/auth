// app/LogoutButton.js
'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/logout', { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        router.push('/login');
      }
    } catch (err) {
      console.error(err);
      alert("Logout failed!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={isLoading}
      className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-5 py-2 rounded-lg transition"
    >
      {isLoading ? "Logging out..." : "Logout"}
    </button>
  );
}
