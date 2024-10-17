import React, { useEffect, useState } from 'react'
import Navbar from '../components/Client/navbar'
import Account from '../components/Client/Account'
import { getUserInfo } from '../../services/userApi/userInfo'

export default function UserInfo() {
    const [user,setUser]= useState([])

    useEffect(()=>{

        const fetchUser = async()=>{
            const data = await getUserInfo();
            setUser(data)
        }
        fetchUser();
    },[])

    const handleUserUpdate = (updatedUser) => {
      setUser(updatedUser);
  };
  return (
    <>
         <div className='md:flex'>
        <div className='md:w-[15%] md:h-screen md:border '>
          <Navbar />
        </div>
        <div className='md:w-[85%] md:h-full'>
          <Account user={user} handleUserUpdate={handleUserUpdate}/>
        </div>
      </div>
    
    </>
  )
}
