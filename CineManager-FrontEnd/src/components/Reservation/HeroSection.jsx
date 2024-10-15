import React, { useEffect, useState } from 'react';
import heroImg from '../../assets/images/img2.jpg';
import logo from '../../assets/images/logo.png';
import { getSeance } from '../../../services/sessionApi/getSessionApi';
import { Link } from 'react-router-dom';

export default function HeroSection({ id }) {
    const [seance, setSeance] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {


        const fetchSeance = async () => {
            const data = await getSeance(id);
            // console.log(data);
            setSeance(data);
            setLoading(true)
        };


        fetchSeance();

    }, [id]);

    const showMdal = ()=>{
        document.getElementById('modal').classList.remove('hidden')
    }
    const CloseMdal = ()=>{
        document.getElementById('modal').classList.add('hidden')
    }
    


    return (
        <>
            {loading && <div className="h-96 bg-[#121212] md:h-[400px] w-full bg-cover bg-center  relative overflow-hidden" style={{ backgroundImage: `url(${seance.film.image})` }}>
                <div className='w-full h-full blur-lg bg-[#000000c0]'></div>
                <Link to="/">
                    <div className='absolute top-0 left-3 w-10 h-10   bg-cover bg-center' style={{ backgroundImage: `url(${logo})` }} >
                    </div>
                </Link>
                <div className='h-72 md:h-96 w-72 md:w-full  absolute -bottom-24  md:left-96  left-24'>
                    <div className='w-[60%] h-32 md:h-52 md:pb-9 flex justify-end '>
                        <h1 className='text-white text-center font-bold text-4xl md:text-7xl [text-shadow:_0_4px_8px_#000000] leading-17'>{seance.film.titre}</h1>
                    </div>

                </div>
                <div className='text-white  flex absolute bottom-10 right-10'>
                    <div className='w-1 h-24 bg-white mr-2' >

                    </div>
                    <div>
                        <p><span className='font-bold'>Genre : {seance.film.genre}</span></p>
                        <p><span className='font-bold'>Duration : </span>{seance.film.duree}  min </p>

                        <div className=" text-white flex justify-center items-center mt-3">
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center">
                                    <span className="text-yellow-400 font-bold text-2xl">&#9733;</span>
                                    <span className="text-lg ml-2">9,3 (3 M)</span>
                                </div>
                                <button onClick={showMdal} className="text-blue-400 border border-blue-400 rounded px-4 py-1 hover:bg-blue-400 hover:text-white transition duration-300">
                                    Noter
                                </button>
                            </div>

                        </div>


                    </div>

                    <div id='modal' className="fixed hidden  z-10 inset-0  flex items-center justify-center bg-black bg-opacity-90 transition-opacity duration-300">
                        <div className="bg-[#1a1a1aeb] p-6 rounded-lg w-96">
                            <div className="flex items-center justify-center mb-4">
                                <span className="text-blue-400 text-5xl">&#9733;</span>
                            </div>
                            <h2 className="text-center text-xl font-bold mb-2">RATING THIS</h2>
                            <h3 className="text-center text-lg mb-4">Enter number between 1 and 5</h3>
                            <div className="flex justify-center items-center mb-4">
                               
                                <span className="text-yellow-400 text-3xl">&#9733;</span>
                                <form action="">

                                <input className='h-7 w-10 pl-3 text-black font-bold rounded-md ml-3 bg-[#ffffffeb]' type="text"/>
                                </form>
                            </div>
                            <div className='flex w-full justify-evenly'>

                            <label onClick={CloseMdal} htmlFor="ratingModal" className="block text-center text-red-400 border border-red-400 rounded px-10 py-2 cursor-pointer hover:bg-red-400 hover:text-white transition duration-300">
                                Cancel
                            </label>
                            <label htmlFor="ratingModal" className="block text-center text-blue-400 border border-blue-400 rounded px-10 py-2 cursor-pointer hover:bg-blue-400 hover:text-white transition duration-300">
                                Submit
                            </label>
                            </div>
                        </div>
                    </div>
                </div>


            </div>}

        </>
    )
}
