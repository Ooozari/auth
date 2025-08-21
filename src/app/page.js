// app/page.js
import LogoutButton from "./LogoutButton";
import Link from "next/link";

export default function Home() {
  const routes = ["/", "/blogs", "/login", "/product", "/setting", "/signup"];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--primary-page-bg)] dark:bg-[var(--primary-page-bg)]">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        Welcome to the App
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Manage your account and settings easily
      </p>

      <div className="p-6 mb-10 bg-white dark:bg-gray-800 rounded-xl shadow-lg w-[600px] mx-auto">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Routes</h3>
        <ul className="space-y-2">
          {routes.map(route => (
            <li key={route}>
              <Link href={route} className="text-blue-600 dark:text-blue-400 hover:underline">
                {route}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <LogoutButton />
    </div>
  );
}
