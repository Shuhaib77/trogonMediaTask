import React from 'react'
import VideoList from '../components/VideoListing.jsx/VideoList'
import Header from '../components/Header'

function Videos() {

    
  return (

    <div className='bg-violet-200 h-[100vh]'>
         <div>
            <Header heading={"VIDEOOS"}/>
        </div>
      <div>
      <VideoList/>
      </div>
    </div>
  )
}

export default Videos