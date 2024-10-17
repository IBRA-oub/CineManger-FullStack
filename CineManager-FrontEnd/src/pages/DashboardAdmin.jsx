import React from 'react'
import NavBar from '../components/Admin/NavBar'
import Dashboard from '../components/Admin/dashboard'

export default function DashboardAdmin() {
  return (
    <>
    <div className='md:flex'>
        <div className='md:w-[15%] md:h-screen md:border '>
            <NavBar />
        </div>
        <div className='md:w-[85%] md:h-full'>
          <Dashboard/>
        </div>
    </div>



</>
  )
}
