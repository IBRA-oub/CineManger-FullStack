import React, { useEffect, useState } from 'react'
import heroImg from '../../assets/images/img2.jpg';
import { getAllFilmWithSomeGenreApi } from '../../../services/filmApi/getAllFilmWithSomeGenreApi';
import { Link } from 'react-router-dom';

export default function FilmSuggestionSection({ film }) {

  const [filmSuggestion, SetFilmSuggestion] = useState([])

  useEffect(() => {
    const fetchAllFilmSuggestion = async () => {

      const data = await getAllFilmWithSomeGenreApi(film.genre)

      SetFilmSuggestion(data)
    }

    fetchAllFilmSuggestion();
  }, [film])

  return (

    <>

      <p className="relative text-white text-xl font-semibold pl-2 pt-5">
        Suggestion movies
        <span className="absolute -bottom-1 left-3  w-16 border-b-2 border-red-700"></span>
      </p>
      {filmSuggestion.map((film) => (

        <Link key={film._id} to={`/all-session-film/${film._id}`} className='w-[100%] h-40  mx-auto p-3  flex  '>

          <div className='w-[50%] h-[80%] bg-slate-100 rounded-md hover:w-[60%] hover:h-[90%] transition-all duration-300 ease-in-out'>
            <img src={film.image} alt="Film Suggestion" className="w-full h-full object-cover rounded-md" />
          </div>
          <div className=' w-[50%]  h-full text-white'>
            <p className='font-bold pl-1'>{film.titre}</p>
            <p className="font-semibold pl-1 flex mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512"><path fill="#3c64aa" d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"/></svg>
              <span className='ml-2 '>{new Date(film.annee).getFullYear()}</span>
              </p>
            <p className='font-semibold pl-1 flex items-center mt-2'>
              <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 512 512"><path fill="#3c64aa" d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
              <span className='ml-2 '>{film.duree} min</span>
            </p>
          </div>

        </Link>
      ))}



    </>
  )
}
