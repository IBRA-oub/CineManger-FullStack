import React, { useEffect, useState } from 'react';
import '../../style/AllSeats.css'
import { getSeance } from '../../../services/sessionApi/getSessionApi';

export default function AllSeats({ id }) {
    // const [numSquares, setNumSquares] = useState(100)

    const [seance, setSeance] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedSeats, setSelectedSeats] = useState([]);

    useEffect(() => {


        const fetchSeance = async () => {
            const data = await getSeance(id);
            // console.log(data);
            setSeance(data);
            setLoading(true)

            const storedSeats = JSON.parse(localStorage.getItem('selectedSeats')) || [];
            setSelectedSeats(storedSeats);
        };


        fetchSeance();

    }, [id]);

    const handleSeatClick = (place) => {
        if (!place.disponible) {

            return;
        }

        const updatedSeats = [...selectedSeats];
        const seatIndex = updatedSeats.indexOf(place.numero);

        if (seatIndex === -1) {

            updatedSeats.push(place.numero);
        } else {

            updatedSeats.splice(seatIndex, 1);
        }


        setSelectedSeats(updatedSeats);
        localStorage.setItem('selectedSeats', JSON.stringify(updatedSeats));
    };


    return (
        <>
            {loading && <div className='w-full h-[150vh] bg-[#121212] flex justify-end'>
                <div className='w-[70%] h-full  flex'>

                    <div className='w-[80%] h-full '>
                        <div className='w-full h-20 flex justify-evenly items-center'>
                            <div className='flex text-white items-center'>
                                <div className='relative w-10 h-10 bg-green-200 rounded-t-full border-b-4 border-gray-700 shadow-lg mr-3'></div>
                                <p>Empty</p>
                            </div>
                            <div className='flex text-white items-center'>
                                <div className='relative w-10 h-10 bg-gray-500 rounded-t-full border-b-4 border-gray-700 shadow-lg mr-3'></div>
                                <p>Full</p>
                            </div>
                            <div className='flex text-white items-center'>
                                <div className='relative w-10 h-10 bg-red-600 rounded-t-full border-b-4 border-gray-700 shadow-lg mr-3'></div>
                                <p>Your reservation</p>
                            </div>
                        </div>

                        <div className='w-full h-56  flex justify-center items-center'>
                            <div className="w-[70%] h-32 bg-[#565656] relative trapezoid"></div>
                        </div>
                        <div className='w-full h-screen  flex justify-center items-center'>
                            <div className='w-[60%] min-h-[80%]  grid grid-cols-12'>
                                {seance.places.map((place) => (
                                    <div
                                        key={place._id}
                                        onClick={() => handleSeatClick(place)}
                                        className={`relative w-10 h-10 mr-3 cursor-pointer flex justify-center items-center
                                            ${!place.disponible ? 'bg-gray-500' : selectedSeats.includes(place.numero) ? 'bg-red-600' : 'bg-green-200'}
                                            ${place.disponible ? 'hover:bg-green-300' : ''}
                                            rounded-t-full border-b-4 border-gray-700 shadow-lg transform hover:scale-105 transition-transform duration-200`}
                                        title={`Seat ${place.numero}`}
                                    >
                                        {/* Numéro du siège */}
                                        <span className="absolute bottom-0 text-xs font-bold text-gray-800">{place.numero}</span>

                                        {/* Effet d'accoudoir */}
                                        <div className="absolute w-8 h-1 bg-gray-700 -bottom-3 left-1 right-1"></div>

                                        {/* Effet ombre en bas du siège */}
                                        <div className="absolute w-10 h-1 bg-gray-400 bottom-0 left-0 right-0 shadow-inner"></div>
                                    </div>
                                ))}




                            </div>

                        </div>
                    </div>
                    <div className='w-[20%] h-full  flex justify-center '>
                        <div className='w-[70%] h-[50%]  flex flex-col text-white space-y-8 p-4  mt-20'>

                            <div className="flex flex-col items-center">
                                <span className="text-lg font-bold">Date & Time:</span>
                                <span className="text-xl mt-2 text-center">{seance.date_heure}</span>
                            </div>


                            <div className="flex flex-col items-center">
                                <span className="text-lg font-bold">Type:</span>
                                <span className="text-xl mt-2">{seance.salle.type}</span>
                            </div>
                        </div>



                    </div>
                </div>

            </div>}

        </>
    )
}
