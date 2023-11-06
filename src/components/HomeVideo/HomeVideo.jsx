import React from 'react';
import './HomeVideo.css';

const HomeVideo = () => {
  return (
    <div>
        <div className='homepage-video'>
            <video defer loop muted playsInline autoPlay preload='metadata'><source src='https://player.vimeo.com/progressive_redirect/playback/875013005/rendition/1080p/file.mp4?loc=external&signature=b4bc6c0c23c7410f6cd80690928859fc23cd412fd5eccecc6432a0befbd445ed#t=0'></source></video>
        </div>
        <div className='media-text'>
            <h1>A CERTAIN IMMEDIACY</h1>
            <h1><i>Introducing Resort 2024</i></h1>
        </div>
    </div>
  )
}

export default HomeVideo