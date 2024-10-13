import React, { useEffect, useState } from 'react';
import movieImg from '../../assets/images/img2.jpg';
import { getAllSession } from '../../../services/sessionApi/getAllSessionApi';
import { Link } from 'react-router-dom';

export default function SessionSection() {

    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        const fetchSession = async () => {
            try {
                const sessionData = await getAllSession();
                // console.log(sessionData)
                setSessions(sessionData);
            } catch (error) {
                console.error('Failed to fetch session:', error);
            }
        };

        fetchSession();
    }, []);

    return (
        <>
            <div className="w-full bg-[#121212] h-[400px]">
                <p className="relative text-white text-xl font-semibold pl-9">
                    All show time
                    <span className="absolute bottom-0 left-9 w-16 border-b-2 border-red-700"></span>
                </p>


                <div className="flex flex-col bg-[#121212] m-auto p-auto">

                    <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
                        <div className="flex flex-nowrap  space-x-4 p-8">
                            {/* ============= */}
                            {sessions.map((session) => (
                                <div key={session._id} className="relative  w-96 h-72  ">
                                    <div className='h-28 w-full  '>

                                    </div>
                                    <div className=' h-44 w-full bg-black rounded-md flex shadow-md shadow-gray-600'>
                                        <div className='w-[40%] h-full  flex flex-col justify-end items-center'>

                                            <Link to={`/reservation/${session._id}`}>
                                                <button className="text-[#FF1B1F] font-bold hover:shadow-md hover:shadow-gray-700  bg-[#ffffff] w-full mb-2 py-1 px-5 rounded hover:bg-[#FF1B1F] hover:text-white flex items-center justify-center">
                                                    <span>To book</span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        height="14"
                                                        width="12.25"
                                                        viewBox="0 0 448 512"
                                                        className="ml-2"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                                                        />
                                                    </svg>
                                                </button>
                                            </Link>
                                        </div>
                                        <div className='w-[60%] h-full  text-white '>
                                            <p className='font-bold pt-6'>{session.film.titre}</p>
                                            <p className='pt-6'>{session.location} </p>
                                            <p>{session.date_heure}</p>
                                            <p className='pt-6'> <span className='font-bold'>from:</span> <span className='text-yellow-300'>{session.tarif} dh</span></p>
                                        </div>
                                    </div>

                                    <div className=" w-36 h-48 absolute top-8   bg-cover bg-center shadow-md shadow-gray-400 rounded-sm " style={{ backgroundImage: `url(${session.film.image})` }}>
                                        <div className="absolute -top-5 -left-2 bg-red-600 text-white font-bold px-4 rounded-md py-2 text-sm -rotate-90 translate-y-8">
                                            New
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* ============== */}
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}
