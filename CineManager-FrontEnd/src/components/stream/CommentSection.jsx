import React, { useEffect, useState } from 'react'
import { commentFilm } from '../../../services/filmApi/commentFilm';

export default function CommentSection({ filmComment,setFilmComment,film }) {
  

  const [comment, setComment] = useState('');
  const handleSubmitComment = async(e) => {

    e.preventDefault();
    const data = {
      comment,
      filmId:film._id
    };

    const newComment  = await commentFilm(data);
    setFilmComment((prevComments) => [...prevComments, newComment]);

    setComment('');
  }

  return (
    <>

      <div className=" text-white">
        <div className="w-[95%] mt-10 p-4">
          <div className="flex items-start space-x-4">

            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white">
                <img className=" rounded-full" src="https://via.placeholder.com/150" alt="User avatar" />
              </div>
            </div>


            <div className="flex-grow">
              <form onSubmit={handleSubmitComment} >

                <input
                 
                  onChange={(e) => setComment(e.target.value)}
                  type="text"
                  placeholder="Ajoutez un commentaire..."
                  className="w-full bg-gray-800 text-gray-300 placeholder-gray-500 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                 <div  className='w-full flex justify-end'>

                  <button
                    type="submit"
                    className="mt-2   bg-[#25252564] hover:bg-[#252525a3] text-white px-10 py-2 rounded-lg "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
     
     
     {filmComment.map((comment) => (
        
        <div key={comment._id} className=" text-white">
          
          <div className=" w-[90%]  mx-10  mt-10 text-white">
            <div className="border bg-[#252525] border-gray-700 rounded-lg p-4 flex items-start space-x-4">

              <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/150" alt="User avatar" />


              <div className="flex-1">

                <div className="flex justify-between items-center mb-3">
                  <div className="text-sm font-medium text-gray-400">
                    <span>{comment.user?.nom}</span>
                    <span className="ml-2 text-xs text-gray-500">il y a {comment.updatedAt} (modifié)</span>
                  </div>
                  <div className="text-sm text-gray-400">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12h.01M12 12h.01M18 12h.01" />
                    </svg>
                  </div>
                </div>

                <p className="text-base">
                  {comment.comment}  <span className="text-yellow-500">🙂</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
   
    


    </>
  )
}
