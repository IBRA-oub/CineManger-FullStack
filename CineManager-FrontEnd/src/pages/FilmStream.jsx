import React from 'react'
import CommentSection from '../components/stream/commentSection'
import FilmSuggestionSection from '../components/stream/filmSuggestionSection'
import VideoSection from '../components/stream/videoSection'

export default function FilmStream() {
  return (
    <>
      <div className='w-full h-screen bg-black'>

        <div className='w-full h-[80vh] bg-black'>
          <VideoSection />
        </div>
        <div className='w-full min-h-2/2 bg-[#121212]  flex'>
          <div className='w-[75%] h-full '>
            <CommentSection />
          </div>
          <div className='w-[25%] h-full '>
            <FilmSuggestionSection />
          </div>
        </div>

      </div>
    </>
  )
}
