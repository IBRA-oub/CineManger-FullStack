import React from 'react'

export default function Custmer({allUsers}) {
   
    
    return (
        <>
            <div className='pt-10 '>
               
                <div className="flex  min-h-screen  justify-center ">
                    <div className="p-6 w-[80%] min-h-screen bg-white">
                        <table className="w-full min-w-max table-auto text-left ">
                            <thead className='bg-[#e5e5e5] '>
                                <tr>
                                    <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 ">
                                        <p className="block antialiased font-sans text-sm text-black  leading-none font-semibold">image</p>
                                    </th>
                                    <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                        <p className="block antialiased font-sans text-sm text-black  leading-none font-semibold">Name</p>
                                    </th>
                                    <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                        <p className="block antialiased font-sans text-sm text-black  leading-none font-semibold">Email</p>
                                    </th>
                                    <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                        <p className="block antialiased font-sans text-sm text-black  leading-none font-semibold">Role</p>
                                    </th>

                                    <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                        <p className="block antialiased font-sans text-sm text-black  leading-none font-semibold"></p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                {allUsers.map(user=>(

                                <tr key={user._id}>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <div className="flex items-center gap-3">
                                            <img src={user.image || "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"} alt="Spotify" className="inline-block relative object-center w-12 h-12 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1" />
                                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold"></p>
                                        </div>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{user.nom}</p>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{user.email}</p>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <div className="w-max">
                                            <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-900 py-1 px-2 text-xs rounded-md" >
                                                <span className="">{user.role}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className=" border-b border-blue-gray-50">
                                       
                                        <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
                                            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                            <svg xmlns="http://www.w3.org/2000/svg"  height="16" width="16" viewBox="0 0 448 512"><path fill="#ff0a0a" d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>                                            </span>
                                        </button>
                                        <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
                                            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 640 512"><path fill="#fea50b" d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L353.3 251.6C407.9 237 448 187.2 448 128C448 57.3 390.7 0 320 0C250.2 0 193.5 55.8 192 125.2L38.8 5.1zM264.3 304.3C170.5 309.4 96 387.2 96 482.3c0 16.4 13.3 29.7 29.7 29.7l388.6 0c3.9 0 7.6-.7 11-2.1l-261-205.6z"/></svg>                                            </span>
                                        </button>
                                    </td>
                                </tr>
                                ))}

                            </tbody>
                        </table>

                    </div>

                </div>
            </div>

        </>
    )
}
