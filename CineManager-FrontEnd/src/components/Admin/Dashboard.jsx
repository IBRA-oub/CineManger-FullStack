import React from 'react'

export default function Dashboard() {
    return (
        <>
            <div className='pt-10 bg-[#d9d9d9]'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
                    <div className="bg-[#383838]  shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
                        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                            <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl">1,257</p>
                            <p>Visitors</p>
                        </div>
                    </div>
                    <div className="bg-[#383838]  shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
                        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                            <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl">557</p>
                            <p>Orders</p>
                        </div>
                    </div>
                    <div className="bg-[#383838]  shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
                        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                            <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl">$11,257</p>
                            <p>Sales</p>
                        </div>
                    </div>
                    <div className="bg-[#383838]  shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
                        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                            <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl">$75,257</p>
                            <p>Balances</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-screen bg-[#d9d9d9]">
           

            <div className="max-w-6xl mx-auto p-8">
                <form  className="flex space-x-8" encType='multipart/form-data'>
                {/* <form onSubmit={handleSubmit} className="flex space-x-8" encType='multipart/form-data'> */}
                    <div className="flex-1 bg-white rounded-lg shadow p-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold">My Account</h2>
                            <button type="submit" className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-4 rounded">Edit</button>
                        </div>

                        <div className="mt-6">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Username</label>
                                    <input
                                        type="text"
                                        // onChange={(e) => setNameField(e.target.value)}
                                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                                    />
                                    {/* {hasError("name") && <div className="text-red-400  font-bold">{getError("name")}</div>} */}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email address</label>
                                    <input
                                        type="email"
                                        // onChange={(e) => setEmailField(e.target.value)}
                                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                                    />
                                    {/* {hasError("email") && <div className="text-red-400  font-bold">{getError("email")}</div>} */}
                                    {/* <div id='userExists' className=" hidden text-red-400 font-bold">email already existe</div> */}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Password</label>
                                    <input
                                        type="password"
                                        // value={passwordField}
                                        // onChange={(e) => setPasswordField(e.target.value)}
                                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                                    />
                                    {/* {hasError("password") && <div className="text-red-400 font-bold">{getError("password")}</div>} */}
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="w-80 bg-white rounded-lg shadow p-6">
                        <div className="text-center">
                            <img
                                src= "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                                // src={user.image || "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"}
                                alt="Profile Avatar"
                                className="w-36 h-36 rounded-full mx-auto"
                            />
                            <h3 className="text-xl font-bold mt-4">test</h3>

                            <div className="flex justify-around mt-4">
                                <div>
                                    <input
                                        type="file"
                                        id="fileInput"
                                        className="hidden"
                                        // onChange={handleImageChange}
                                    />
                                    <label htmlFor="fileInput" className="cursor-pointer inline-flex items-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 640 512" className="mr-2">
                                            <path fill="#ffffff" d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128l-368 0zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39L296 392c0 13.3 10.7 24 24 24s24-10.7 24-24l0-134.1 39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z" />
                                        </svg>
                                        Upload Image
                                    </label>
                                   <label htmlFor="fileInput" className=" cursor-pointer inline-flex items-center bg-green-500 hover:bg-green-600 text-white py-2 px-16 rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                                    
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 ">
                            <p><span className="font-bold">Email:</span> test</p>
                            <p><span className="font-bold">Role : </span> Client</p>
                            <p><span className="font-bold"></span> </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        </>
    )
}
