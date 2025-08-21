import React from "react"

function Page() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--primary-page-bg)] p-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Product Page
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-xl">
                Your product details appear here
            </p>
        </div>
    )
}

export default Page
