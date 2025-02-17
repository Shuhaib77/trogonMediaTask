import React from 'react'
import VideoStream from '../components/VideoListing.jsx/VideoStream'
import Header from '../components/Header'

function VideoPlay() {
  return (
    <div>
        <div>
        <div>
            <Header heading={"VIEW AND STUDY"}/>
        </div>
        </div>
        <div>
            <VideoStream/>
        </div>
    </div>
  )
}

export default VideoPlay