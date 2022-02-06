import React, { useRef, useState } from 'react';
import video from '../../res/video.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import './Intro.css';

function Intro() {

    const [playVideo, setPlayVideo] = useState(false);
    const vidRef = useRef();

    return(

        <div className='app__Vid'>

            <video ref={ vidRef } src={ video } type='video/mp4' loop controls={ false } muted/>

            <div className='app__Vid-overlay flex'>
                <div className='app__Vid-overlay-icon flex' onClick={ () => { setPlayVideo(!playVideo); if (playVideo) { vidRef.current.pause(); } else { vidRef.current.play(); } } }>
                    { playVideo ? (<FontAwesomeIcon icon={ faPause } color='#ffffff' fontSize={ 30 }/>) : (<FontAwesomeIcon icon={ faPlay } color='#ffffff' fontSize={ 30 }/>) }
                </div>
            </div>
            
        </div>

    );

};

export default Intro;
