import React from 'react'
import Salles from '../components/Admin/Salles'
import NavBar from '../components/Admin/NavBar'

export default function SalleGestion() {
    return (
        <div className='md:flex'>
            <div className='md:w-[15%] md:h-screen md:border '>
                <NavBar />
            </div>
            <div className='md:w-[85%] md:h-full'>
                <Salles/>
            </div>
        </div>
    )
}
