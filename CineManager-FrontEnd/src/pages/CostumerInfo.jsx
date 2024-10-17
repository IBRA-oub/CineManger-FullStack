import React from 'react'
import Custmer from '../components/Admin/Custmer'
import NavBar from '../components/Admin/NavBar'

export default function CostumerInfo() {
  return (
    <div className='md:flex'>
    <div className='md:w-[15%] md:h-screen md:border '>
        <NavBar />
    </div>
    <div className='md:w-[85%] md:h-full'>
      <Custmer/>
    </div>
</div>
  )
}
