import React from 'react';
import img from '../../assets/images/img2.jpg';


export default function AllTickets() {

    const tickets = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },

    ];
    return (
        <>

            <div className='w-full h-full bg-white'>
                <p className="relative text-black text-xl font-semibold pl-9 md:pt-5">
                    All Tickets
                    <span className="absolute bottom-0 left-9 w-20 border-b-2 border-red-700"></span>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6 w-full p-6">
                    {tickets.map((ticket) => (
                        <div className="relative mx-auto w-full">

                            <div key={ticket.id} className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
                                <div className="max-w-4xl mx-auto p-4 bg-white shadow-md border border-gray-300">
                                  
                                    <div className="flex flex-col md:flex-row">

                                        
                                        <div className="flex flex-col items-center justify-center bg-gray-200 md:w-1/3 relative rounded-md">
                                            <img src={img} alt="Olivia Rodrigo" className="object-cover  h-full w-full rounded-md"/>
                                               
                                        </div>

                                       
                                        <div className="flex-1 p-4 md:p-6 text-center">
                                            <div className="uppercase text-xs text-gray-500 font-bold tracking-wider">
                                                <hr className='mb-2  border-black'/>
                                                Tuesday, June 29th, 2021
                                                <hr className='mt-2 border-black'/>
                                            </div>
                                            <h1 className="text-2xl font-bold text-purple-700">Avangers infinity war</h1>
                                            <p className="text-lg text-red-500 mb-4">brahim oubourrih</p>
                                            <p className="font-bold text-gray-600">8:00 PM TO 11:00 PM</p>
                                            <p className="text-gray-500">Doors @ 7:00 PM</p>
                                            <div className="mt-6 border-t md:flex border-gray-300 pt-4">
                                                <p className="text-sm text-gray-500">Cinéma Megarama</p>
                                                <p className='w-full md:w-8 h-10   flex justify-center items-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512"><path fill="#ababab" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                                                </p>
                                                <p className="text-sm text-gray-500">Bd de la Corniche, Casablanca 20100</p>
                                            </div>
                                        </div>

                                        
                                        <div className="flex flex-col items-center justify-center bg-gray-100 p-4 md:w-1/4">
                                            <p className="text-sm uppercase font-bold tracking-widest text-gray-600 mb-2">VIP</p>
                                            <p className="text-xs text-gray-500">seat Number 1</p>
                                            <p className="text-xs text-gray-500">Doors @ 7:00 PM</p>
                                          
                                                <p className="text-xs text-gray-500">#20030220</p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
