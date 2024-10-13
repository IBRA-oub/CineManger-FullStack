import React, { useEffect, useState } from 'react';
import logoImg from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { getAllFilms } from '../../../services/filmApi/getAllFilmApi';


export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentFilmIndex, setCurrentFilmIndex] = useState(0);
  const [films, setFilms] = useState([]);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const AllFilms = async () => {

      const filmsData = await getAllFilms();
      setFilms(filmsData)

    }

    AllFilms();

    const savedToken = localStorage.getItem('token');
    setToken(savedToken);
  }, [])


  useEffect(() => {
    const interval = setInterval(() => {
      // console.log('hey')

      setCurrentFilmIndex((prevIndex) => {

        if (prevIndex === films.length - 1) {
          return 0;
        } else {
          return prevIndex + 1

        }
      });
    }, 5000)

    return () => clearInterval(interval)
  }, [films])

  if (films.length === 0) {
    return <div>Loading...</div>;
  }

  // Film actuel
  const currentFilm = films[currentFilmIndex];
  // console.log(currentFilm)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="h-[600px] md:h-[600px] w-full bg-cover bg-center  relative " style={{ backgroundImage: `url(${currentFilm.image})` }}>
        <div className="h-10 w-full bg-black bg-opacity-90 flex justify-between items-center">
          <div className="h-9 w-9 bg-cover bg-center" style={{ backgroundImage: `url(${logoImg})` }}></div>
          <Link to={token ? '/client-reservation' : '/login'} className='hidden md:block mr-7'>
            <button className="text-white px-11 bg-[#FF1B1F] font-bold w-full py-1 rounded hover:bg-[#ff4f51]">
              {token ? 'dashboard' : 'Connect'}
            </button>
          </Link>
          <button className="h-9 w-9 flex md:hidden" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512">
              <path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
        </div>
        <div className='w-full h-[90%] md:h-[93.3%] bg-[#000000aa]'></div>
        <div className=' h-72 md:h-96 w-72 md:w-[50%]   absolute bottom-52 md:bottom-16 md:left-52 left-10'>
          <div className='w-[100%]  h-32 md:h-52 md:pb-9'>
            <h1 className='text-white  font-bold text-4xl md:text-8xl [text-shadow:_0_4px_8px_#000000] leading-17'>{currentFilm.titre}</h1>
          </div>
          <div className='h-48 md:h-24 w-full md:pb-9'>
            <p className='text-white font-bold text-xl [text-shadow:_0_4px_8px_#000000]'>Genre {currentFilm.genre}  | duree {currentFilm.duree} min</p>
            <p className='text-white  w-[100%] md:w-[70%] pt-3  [text-shadow:_0_4px_8px_#000000]'> {currentFilm.description}</p>
          </div>
          <div className='mt-24 md:mt-16'>

            <Link  to={`/all-session-film/${currentFilm._id}`}>
              <button className="text-[#FF1B1F] font-bold mt-4 bg-[#ffffff] w-[30%] py-2 rounded hover:space-x-3   flex justify-center items-center space-x-1">
                <span>To book</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512">
                  <path fill="#ff1b1f" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </button>
            </Link>

          </div>
        </div>
      </div>

      {/* Burger menu  */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4">
          <div className="h-10 w-10 bg-cover bg-center" style={{ backgroundImage: `url(${logoImg})` }}></div>
        </div>
        <div className="p-4">

          <Link to='/login'>
            <button className="mt-4 bg-[#FF1B1F] font-bold w-full py-2 rounded hover:bg-[#ff4f51]">connect</button>
          </Link>
        </div>
      </div>

      {/* close menu when we click outside*/}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
}
