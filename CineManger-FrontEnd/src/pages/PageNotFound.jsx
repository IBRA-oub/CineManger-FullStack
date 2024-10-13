import React from 'react';
import Img from '../assets/images/notfound.jpg';

export default function PageNotFound() {
  return (
    <>
      <section className="flex items-center h-screen p-16 dark:bg-gray-50 dark:text-gray-800 bg-cover bg-center" style={{ backgroundImage: `url(${Img})` }}>
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8" bis_skin_checked="1">
          <div className="max-w-md text-center" bis_skin_checked="1">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
              <span className="sr-only text-white">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl text-white">Sorry, we couldn't find this page.</p>
            <p className="mt-4 mb-8 dark:text-white">But dont worry, you can find plenty of other things on our homepage.</p>
            <a rel="noopener noreferrer" href="/" className="px-8 py-3 font-semibold rounded dark:bg-red-600 dark:text-gray-50">Back to homepage</a>
          </div>
        </div>
      </section>
    </>
  )
}
