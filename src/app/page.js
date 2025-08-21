'use client';
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleLogout = () => {
    // Remove the cookies
    Cookies.remove("user");       
    Cookies.remove("signupUser"); 

    console.log("User logged out!");

    // Redirect to login
    router.push("/signup");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--primary-page-bg)] dark:bg-[var(--primary-page-bg)]">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        Welcome to the Dashboard
      </h1>

      {/* Subheading */}
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Manage your account and settings easily
      </p>

      <div className="p-6 mb-10 bg-white dark:bg-gray-800 rounded-xl shadow-lg w-[600px] mx-auto">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Routes</h3>
        <ul className="space-y-2">
          <li>
            <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
              /
            </a>
          </li>
          <li>
            <a href="/blogs" className="text-blue-600 dark:text-blue-400 hover:underline">
              /blogs
            </a>
          </li>
          <li>
            <a href="/login" className="text-blue-600 dark:text-blue-400 hover:underline">
              /login
            </a>
          </li>
          <li>
            <a href="/product" className="text-blue-600 dark:text-blue-400 hover:underline">
              /product
            </a>
          </li>
          <li>
            <a href="/setting" className="text-blue-600 dark:text-blue-400 hover:underline">
              /setting
            </a>
          </li>
          <li>
            <a href="/signup" className="text-blue-600 dark:text-blue-400 hover:underline">
              /signup
            </a>
          </li>
        </ul>
      </div>


      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-5 py-2 rounded-lg transition"
      >
        Logout
      </button>
    </div>
  );
}
