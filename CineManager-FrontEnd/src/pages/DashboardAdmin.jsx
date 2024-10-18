import React, { useEffect, useState } from 'react'
import NavBar from '../components/Admin/NavBar'
import Dashboard from '../components/Admin/dashboard'
import { getUserInfo } from '../../services/userApi/userInfo'
import { getCountUser } from '../../services/userApi/getCountUser'
import { getCountFilmApi } from '../../services/filmApi/getCountFilmApi'
import { getCountReservationApi } from '../../services/reservation/getCountReservationApi'
import { getCountSeanceApi } from '../../services/sessionApi/getCountSessionApi'

export default function DashboardAdmin() {
  const [user,setUser]= useState([])
  const [countUser,setCountUser]= useState([])
  const [countFilm,setCountFilm]= useState([])
  const [countReservation,setCountReservation]= useState([])
  const [countSeance,setCountSeance]= useState([])

  useEffect(()=>{

      const fetchUser = async()=>{
          const data = await getUserInfo();
          setUser(data)
      }
      const fetchCountUser = async()=>{
          const data = await getCountUser()
          setCountUser(data)
      }
      const fetchCountFilm = async()=>{
          const data = await getCountFilmApi();
          setCountFilm(data)
      }
      const fetchCountReservation = async()=>{
          const data = await getCountReservationApi();
          setCountReservation(data)
      }
      const fetchCountSeance = async()=>{
          const data = await getCountSeanceApi();
          setCountSeance(data)
      }
      fetchUser();
      fetchCountUser();
      fetchCountFilm();
      fetchCountReservation();
      fetchCountSeance();
  },[])

  const handleUserUpdate = (updatedUser) => {
    setUser(updatedUser);
};
  return (
    <>
    <div className='md:flex'>
        <div className='md:w-[15%] md:h-screen md:border '>
            <NavBar />
        </div>
        <div className='md:w-[85%] md:h-full'>
          <Dashboard user={user} handleUserUpdate={handleUserUpdate} countUser={countUser} countFilm={countFilm} countReservation={countReservation} countSeance={countSeance}/>
        </div>
    </div>



</>
  )
}
