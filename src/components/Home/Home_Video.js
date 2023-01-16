import React from 'react'
import "./Home_Video.css"
import { useState, useRef } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import video from "../../videos/video.mp4"

const Home_Vide = () => {

  const vidRef = useRef();
  const [playVideo, setPlayVideo] = useState(false);

  const handleVideo = () => {
    setPlayVideo(prevPlayVideo => !prevPlayVideo)
    if(playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }

  return (
    <div className='home_video_container'>
      
      <div className='home_video_title_container'>
        <h1>BJ Nft Marketplace</h1>
        <h2>Mission to lead the futur of metaverse</h2>
      </div>

      <div className='home_video_video_container'>
        <video 
          src={video}
          ref={vidRef}
          type="video/mp4"
          loop
          controls={false}
          muted
        />
        <div className='home_video_overlay_container'>
          <div className='home_video_overlay' onClick={handleVideo}>
          {playVideo ? (<BsPauseFill color='#fff' fontSize={30}/>) : (<BsFillPlayFill color='#fff' fontSize={30}/>)}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home_Vide
