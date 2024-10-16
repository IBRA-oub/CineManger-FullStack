import React from 'react'
import Navbar from '../components/Client/navbar'
import Account from '../components/Client/Account'

export default function UserInfo() {
  return (
    <>
         <div className='md:flex'>
        <div className='md:w-[15%] md:h-screen md:border '>
          <Navbar />
        </div>
        <div className='md:w-[85%] md:h-full'>
          <Account/>
        </div>
      </div>
    
    </>
  )
}
