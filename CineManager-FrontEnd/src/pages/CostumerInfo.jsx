import React, { useEffect, useState } from 'react'
import Custmer from '../components/Admin/Custmer'
import NavBar from '../components/Admin/NavBar'
import { getAllUsers } from '../../services/userApi/getAllUsers'

export default function CostumerInfo() {
  const [allUsers,setAllUsers]= useState([])

  useEffect(()=>{

    const fetchAllUsers = async()=>{
      const data = await getAllUsers();
   
      
      setAllUsers(data)
  }
  fetchAllUsers();
},[])
  return (
    <div className='md:flex'>
    <div className='md:w-[15%] md:h-screen md:border '>
        <NavBar />
    </div>
    <div className='md:w-[85%] md:h-full'>
      <Custmer allUsers={allUsers}/>
    </div>
</div>
  )
}
