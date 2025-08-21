import React from "react"
import { useAuthRedirect } from "@/hooks/useAuthRedirect";
function Page() {
    useAuthRedirect()
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--primary-page-bg)] p-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Blog Page
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-xl">
                Explore our latest articles, updates, and insights here.
            </p>
        </div>
    )
}

export default Page
