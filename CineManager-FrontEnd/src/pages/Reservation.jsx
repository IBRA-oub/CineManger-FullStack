import React, { useState } from 'react'
import HeroSection from '../components/Reservation/heroSection'
import SeatsReseve from '../components/Reservation/SeatsReseve'
import AllSeats from '../components/Reservation/AllSeats'
import { useParams } from 'react-router-dom'

export default function Reservation() {

  const [selectedSeats, setSelectedSeats] = useState([]);

  const {id} = useParams();
  return (
    <>
   
    <HeroSection id={id} />
    <SeatsReseve id={id} selectedSeats={selectedSeats}  setSelectedSeats={setSelectedSeats}/>
    <AllSeats id={id} selectedSeats={selectedSeats}  setSelectedSeats={setSelectedSeats} />
   
    </>
  )
}
