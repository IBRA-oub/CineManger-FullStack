import React from 'react'
import Navbar from '../components/Client/navbar'
import AllReservation from '../components/Client/AllReservation'

export default function ClientReservation() {
    return (
        <>
            <div className='md:flex'>
                <div className='md:w-[15%] md:h-screen md:border '>
                    <Navbar />
                </div>
                <div className='md:w-[85%] md:h-full'>
                    <AllReservation />
                </div>
            </div>



        </>
    )
}
