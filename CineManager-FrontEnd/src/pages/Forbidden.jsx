import React from 'react'

export default function Forbidden() {
  return (
    <>
    <section className="flex items-center h-screen p-16  bg-black bg-cover bg-center">
    <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8" bis_skin_checked="1">
      <div className="max-w-md text-center" bis_skin_checked="1">
        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
          <span className="sr-only text-white">Error</span>403
        </h2>
        <p className="text-2xl font-semibold md:text-3xl text-white">Sorry.</p>
        <p className="mt-4 mb-8 dark:text-white">You are banned from admin , conctact for more infromation.</p>
        <a rel="noopener noreferrer" href="/" className="px-8 py-3 font-semibold rounded dark:bg-red-600 dark:text-gray-50">Back to homepage</a>
      </div>
    </div>
  </section>
</>
  )
}
