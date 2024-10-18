import React from 'react'
import NavBar from '../components/Admin/NavBar'
import Film from '../components/Admin/Film'

export default function FilmGestion() {
  return (
    <div className='md:flex'>
      <div className='md:w-[15%] md:h-screen md:border '>
        <NavBar />
      </div>
      <div className='md:w-[85%] md:h-full'>
        <Film />
      </div>
    </div>
  )
}
