import React, { useEffect, useState } from 'react';
import heroImg from '../../assets/images/img2.jpg';
import { getFilm } from '../../../services/filmApi/getFilmApi';

export default function HeroSection({id}) {
  const [film, setFilm] = useState([]);

    useEffect(() => {


        const fetchFilm = async () => {
            const data = await getFilm(id);
            // console.log(data);
            setFilm(data);
        };


        fetchFilm();

    }, [id]);
  return (
    <>
     <div className="h-96 md:h-[500px] w-full bg-cover bg-center  relative" style={{ backgroundImage: `url(${film.image})` }}>
        

        <div className='h-72 md:h-96 w-72 md:w-full  absolute -bottom-24 md:-bottom-40 md:left-0  left-24'>
          <div className='w-full h-32 md:h-52 md:pb-9 flex justify-center '>
            <h1 className='text-white font-bold text-5xl md:text-8xl [text-shadow:_0_4px_8px_#000000] leading-17'>{film.titre}</h1>
          </div> 
          <div>
          </div>
        </div>
      </div>
    </>
  )
}
