import React from 'react'

export default function SearchSection() {
    return (
        <>
            <form action="">
                <div className='bg-[#121212] h-40 md:h-20 w-full md:flex md:justify-center md:items-center'>

                    <div className=' w-full h-1/2 flex justify-center items-center'>
                        <input className='w-80 md:w-[90%] h-10 rounded pl-5 text-white bg-[#252525]' type="text" placeholder='Titre...' />
                    </div>
                    <div className=' w-full  h-1/2 flex justify-evenly items-center'>

                        <select name="" id="" className='w-20 md:w-48 h-10 rounded text-gray-400 px-2 bg-[#252525]'>
                            <option value="">genre1</option>
                            <option value="">genre2</option>
                            <option value="">genre3</option>
                            <option value="">genre4</option>
                        </select>

                        <input type="date" name="" id="" className='w-20 md:w-48 h-10 rounded text-gray-400  px-2 bg-[#252525]'/>
                        <button type='submit' className=" text-white w-20 md:w-48 h-10  bg-[#FF1B1F] font-bold  py-1 rounded  hover:shadow-md hover:shadow-gray-700">Search</button>
                    </div>
                </div>
            </form>

        </>
    )
}
