import React, { useState } from 'react'

export default function Film() {
    const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
    const [isUpdatePopupOpen, setIsUpdatePopupOpen] = useState(false);
    const openAddPopup = () => setIsAddPopupOpen(true);
    const closeAddPopup = () => setIsAddPopupOpen(false);
    const openUpdatePopup = () => setIsUpdatePopupOpen(true);
    const closeUpdatePopup = () => setIsUpdatePopupOpen(false);
    return (
        <>
            <div className='pt-10 '>
                <div className='h-12 w-full  flex justify-end'>
                    <button onClick={openAddPopup} className='px-12 rounded-md font-bold mr-40 bg-[#707070]'>Add</button>
                </div>
                <div className="flex  min-h-screen  justify-center ">
                    <div className="p-6 w-[80%] min-h-screen bg-white">
                        <table className="w-full min-w-max table-auto text-left ">
                            <thead className='bg-[#e5e5e5] '>
                                <tr>
                                    <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 ">
                                        <p className="block antialiased font-sans text-sm text-black  leading-none font-semibold">Image</p>
                                    </th>
                                    <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                        <p className="block antialiased font-sans text-sm text-black  leading-none font-semibold">Titre</p>
                                    </th>
                                    <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                        <p className="block antialiased font-sans text-sm text-black  leading-none font-semibold">Duration</p>
                                    </th>
                                    <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                        <p className="block antialiased font-sans text-sm text-black  leading-none font-semibold">Genre</p>
                                    </th>
                                    <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                        <p className="block antialiased font-sans text-sm text-black  leading-none font-semibold">Year</p>
                                    </th>

                                    <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                        <p className="block antialiased font-sans text-sm text-black  leading-none font-semibold"></p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                <tr>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <div className="flex items-center gap-3">
                                            <img src="https://docs.material-tailwind.com/img/logos/logo-spotify.svg" alt="Spotify" className="inline-block relative object-center w-12 h-12 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1" />
                                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold"></p>
                                        </div>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">$2,500</p>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Wed 3:00pm</p>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Wed 3:00pm</p>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <div className="w-max">
                                            <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-900 py-1 px-2 text-xs rounded-md" >
                                                <span className="">paid</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className=" border-b border-blue-gray-50">
                                        <button onClick={openUpdatePopup} className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
                                            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#1bff0a" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" /></svg>
                                            </span>
                                        </button>
                                        <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
                                            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 448 512"><path fill="#ff0a0a" d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>                                            </span>
                                        </button>

                                    </td>
                                </tr>

                            </tbody>
                        </table>

                    </div>

                </div>
            </div>

            {isUpdatePopupOpen && (
                <div className='fixed top-0 left-0 w-full min-h-screen bg-[#00000069]'>
                    <div className='w-full h-screen flex items-center justify-center'>
                        <div className='w-1/3 bg-white p-6 rounded-md relative'>
                           
                            <button onClick={closeUpdatePopup} className='font-bold text-red-600 absolute top-2 right-5'>
                                X
                            </button>
                            <h2 className='text-center font-bold mb-4'>Update film</h2>
                            <form >
                                <div className='mb-4'>
                                    <label>Titre</label>
                                    <input
                                        type='text'
                                        name='title'
                                     
                                        className='w-full border border-gray-300 rounded-md p-2'
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label>Description</label>
                                    <textarea
                                        name='description'
                                     
                                        className='w-full border border-gray-300 rounded-md p-2'
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label>Genre</label>
                                    <input
                                        type='text'
                                        name='genre'
                                      
                                        className='w-full border border-gray-300 rounded-md p-2'
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label>Durée</label>
                                    <input
                                        type='text'
                                        name='duration'
                                   
                                        className='w-full border border-gray-300 rounded-md p-2'
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label>Année</label>
                                    <input
                                        type='text'
                                        name='year'
                                     
                                        className='w-full border border-gray-300 rounded-md p-2'
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label>Image (URL)</label>
                                    <input
                                        type='file'
                                        name='image'
                                     
                                        className='w-full border border-gray-300 rounded-md p-2'
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label>Vidéo (URL)</label>
                                    <input
                                        type='file'
                                        name='video'
                                      
                                        className='w-full border border-gray-300 rounded-md p-2'
                                    />
                                </div>
                                <div className='flex justify-end'>
                                    <button
                                        type='submit'
                                        className=' w-full px-4 py-2 bg-green-600 text-white rounded-md'
                                    >
                                        Update
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            {isAddPopupOpen && (
                <div className='fixed top-0 left-0 w-full min-h-screen bg-[#00000069]'>
                    <div className='w-full h-screen flex items-center justify-center'>
                        <div className='w-1/3 bg-white p-6 rounded-md relative'>
                           
                            <button onClick={closeAddPopup} className='font-bold text-red-600 absolute top-2 right-5'>
                                X
                            </button>
                            <h2 className='text-center font-bold mb-4'>Add new film</h2>
                            <form >
                                <div className='mb-4'>
                                    <label>Titre</label>
                                    <input
                                        type='text'
                                        name='title'
                                     
                                        className='w-full border border-gray-300 rounded-md p-2'
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label>Description</label>
                                    <textarea
                                        name='description'
                                     
                                        className='w-full border border-gray-300 rounded-md p-2'
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label>Genre</label>
                                    <input
                                        type='text'
                                        name='genre'
                                      
                                        className='w-full border border-gray-300 rounded-md p-2'
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label>Durée</label>
                                    <input
                                        type='text'
                                        name='duration'
                                   
                                        className='w-full border border-gray-300 rounded-md p-2'
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label>Année</label>
                                    <input
                                        type='text'
                                        name='year'
                                     
                                        className='w-full border border-gray-300 rounded-md p-2'
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label>Image (URL)</label>
                                    <input
                                        type='file'
                                        name='image'
                                     
                                        className='w-full border border-gray-300 rounded-md p-2'
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label>Vidéo (URL)</label>
                                    <input
                                        type='file'
                                        name='video'
                                      
                                        className='w-full border border-gray-300 rounded-md p-2'
                                    />
                                </div>
                                <div className='flex justify-end'>
                                    <button
                                        type='submit'
                                        className=' w-full px-4 py-2 bg-green-600 text-white rounded-md'
                                    >
                                        Ajouter
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
