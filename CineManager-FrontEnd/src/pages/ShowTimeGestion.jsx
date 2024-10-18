import React from 'react'
import NavBar from '../components/Admin/NavBar'
import ShowTime from '../components/Admin/ShowTime'

export default function ShowTimeGestion() {
  return (
    <div className='md:flex'>
      <div className='md:w-[15%] md:h-screen md:border '>
        <NavBar />
      </div>
      <div className='md:w-[85%] md:h-full'>
        <ShowTime />
      </div>
    </div>
  )
}
