import React, { useEffect, useState } from 'react';
import heroImg from '../../assets/images/img2.jpg';
import axios from 'axios';
import { getSeance } from '../../../services/sessionApi/getSessionApi';
import { Link, useNavigate } from 'react-router-dom';

export default function SeatsReseve({ id }) {
    const [seance, setSeance] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [sucessReservation, setSucessReservation] = useState(false);
    const navigate = useNavigate();

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
    const handleConfirmReservation = async (e) => {
        e.preventDefault();


        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));

        if (!token || !user) {
            setShowAlert(true);
            return;
        }

        try {

            const reservationData = {
                seanceId: seance._id,
                places_reservees: selectedSeats.map(seat => ({ numero: seat })),
            };

            // Envoyer la requête POST à l'API backend
            const response = await axios.post('http://localhost:3000/api/reservation/createReservation', reservationData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.data.success) {
                setSucessReservation(true);
                

                localStorage.removeItem('selectedSeats');
                setSelectedSeats([]);
            }
        } catch (error) {
            console.error('Erreur lors de la réservation:', error);
            alert('Une erreur est survenue lors de la réservation.');
        }
    };

    const handleCancelReservation = () => {

        localStorage.removeItem('selectedSeats');
        setSelectedSeats([]);


        navigate('/');
    };
    return (
        <>
            {loading && <div className='bg-[#121212] w-80 h-[150vh] absolute top-36 left-32'>

                <div className='w-full h-[40%] bg-slate-100 bg-cover bg-right rounded-sm' style={{ backgroundImage: `url(${seance.film.image})` }}>

                </div>
                <form onSubmit={handleConfirmReservation}>
                    <div className="bg-[#121212] text-white p-4 w-80 rounded-lg shadow-lg">

                        <div className="space-y-4">
                            {selectedSeats.map((seat, index) => (
                                <div key={index} className="flex justify-between items-center border border-white p-3">
                                    <span className="text-lg font-bold">N° : {seat}</span>
                                    <span className="text-gray-400">300 dh</span>
                                    <button
                                        className="text-gray-400 hover:text-red-500"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            // Supprimer le siège du localStorage
                                            const updatedSeats = selectedSeats.filter(s => s !== seat);
                                            setSelectedSeats(updatedSeats);
                                            localStorage.setItem('selectedSeats', JSON.stringify(updatedSeats));
                                        }}
                                    >&times;</button>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-between items-center mt-4 text-lg">
                            <span>Total :</span>
                            <span>{selectedSeats.length * `${seance.tarif}`} dh</span>
                        </div>

                        <div className="flex justify-between mt-16">
                            <button onClick={handleCancelReservation} className="border font-bold border-[#FF1B1F] text-[#FF1B1F] hover:bg-red-700 hover:text-white px-4 py-2">Cancel</button>
                            <button className="bg-[#FF1B1F] font-bold hover:bg-green-700 text-white px-4 py-2 ">Confirm</button>
                        </div>
                    </div>
                </form>

            </div>}

            {showAlert && (
                <div className="fixed top-0 left-0 w-full h-full bg-[#000000b0]  flex justify-center items-center z-50">
                    <div className="bg-[#585858f0] text-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-xl text-center  mb-4">Oops!!</h2>
                        <h2 className="text-xl  mb-4">Vous devez être connecté pour réserver.</h2>
                        <div className='w-full h-auto flex justify-center'>

                            <button
                                onClick={() => setShowAlert(false)}
                                className="bg-[#FF1B1F] text-white px-4 py-2 rounded-lg hover:bg-red-700 ">
                                Fermer
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {sucessReservation && (
                <div className="fixed top-0 left-0 w-full h-full bg-[#000000b0]  flex justify-center items-center z-50">
                    <div class="w-full md:w-1/3 mx-auto">
                        <div class="flex flex-col p-5 rounded-lg shadow bg-white">
                            <div class="flex flex-col items-center text-center">
                                <div class="inline-block p-4 bg-yellow-50 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="34" width="34" viewBox="0 0 512 512"><path fill="#04ff00" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm156.4 25.6c-5.3 7.1-15.3 8.5-22.4 3.2s-8.5-15.3-3.2-22.4c30.4-40.5 91.2-40.5 121.6 0c5.3 7.1 3.9 17.1-3.2 22.4s-17.1 3.9-22.4-3.2c-17.6-23.5-52.8-23.5-70.4 0z" /></svg>
                                </div>
                                <h2 class="mt-2 font-semibold text-gray-800">Reservation Successful!</h2>
                                <p class="mt-2 text-sm text-gray-600 leading-relaxed">Your reservation has been made successfully. You can now view your reservation details.

                                    Please click the button below to see your reservation.</p>
                            </div>

                            <div class="flex items-center mt-3">
                                <button class="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">

                                </button>

                                <Link to="/client-reservation" class="flex-1 text-center px-4 py-2 ml-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-md">
                                    view reservation
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}
