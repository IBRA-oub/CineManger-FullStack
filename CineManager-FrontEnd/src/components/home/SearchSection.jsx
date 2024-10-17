import React, { useState } from 'react'

export default function SearchSection({ onSearch,onReset }) {

    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch({ title, genre });
    }
    const handleReset = () => {
        setTitle('');
        setGenre('');
        onReset();
       
        
    };
    return (
        <>
            <form onSubmit={handleSearch}>
                <div className='bg-[#121212] h-40 md:h-20 w-full md:flex md:justify-center md:items-center'>

                    <div className=' w-full h-1/2 flex justify-center items-center'>
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className='w-80 md:w-[90%] h-10 rounded pl-5 text-white bg-[#252525]' type="text" placeholder='Titre...' />
                    </div>
                    <div className=' w-full  h-1/2 flex justify-evenly items-center'>

                        <select
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                            className='w-20 md:w-48 h-10 rounded text-gray-400 px-2 bg-[#252525]'>
                            <option>Chose genre</option>
                            <option value="Action">Action </option>
                            <option value="Animation">Animation </option>
                            <option value="Comedy">Comedy </option>
                            <option value="Drama">Drama  </option>
                            <option value="Experimental">Experimental  </option>
                            <option value="Fantasy">Fantasy </option>
                            <option value="Historical">Historical  </option>
                            <option value="Romance">Romance </option>
                            <option value="Science-fiction">Science-fiction </option>
                        </select>

                        <button type='submit' className=" text-white w-20 md:w-48 h-10  bg-[#FF1B1F] font-bold  py-1 rounded  hover:shadow-md hover:shadow-gray-700">Search</button>
                        <button onClick={handleReset}  className=" text-white w-20 md:w-48 h-10  bg-[#5c5c5c] font-bold  py-1 rounded  hover:shadow-md hover:shadow-gray-700">Reset</button>
                    </div>
                </div>
            </form>

        </>
    )
}
