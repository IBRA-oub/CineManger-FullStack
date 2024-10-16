import React from 'react'
// import streamVideo from '../../assets/images/streamVideo.mp4';

export default function VideoSection({ film }) {
 
  return (
    <>

      <div className='w-full h-full '>
        <video controls className='w-full h-full' src={film.video} type="video/mp4" />
      </div>


    </>
  )
}
