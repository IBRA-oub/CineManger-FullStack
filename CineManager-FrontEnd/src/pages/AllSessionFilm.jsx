import React from 'react'
import HeroSection from '../components/AllSessionFilm.jsx/HeroSection'
import AllSession from '../components/AllSessionFilm.jsx/AllSession'
import FooterSection from '../components/home/footerSection';
import { useParams } from 'react-router-dom';
// import { getAllSessionByFilm } from '../../services/sessionApi/getAllSessionByFilmApi';
export default function AllSessionFilm() {
  const { id } = useParams();



  return (
    <> 
    
    <HeroSection id={id} />
      <AllSession id={id} />
      <FooterSection />

    </>
  )
}
