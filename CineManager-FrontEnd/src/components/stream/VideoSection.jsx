import React from 'react'
import streamVideo from '../../assets/images/streamVideo.mp4';

export default function VideoSection() {
  return (
    <>
      <div className='w-full h-full '>

      <video className='w-full h-full' controls>
          <source src={streamVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </div>
   
    
    </>
  )
}
