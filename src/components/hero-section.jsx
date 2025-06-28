import React, { Suspense, useRef } from 'react';
import './hero-section.scss';
import LogoScene from './logoScene';
import StarryBackground from './StarryBackground';
import NextBtn from '../assets/btn-next.svg';

function Hero(){
    const containerRef = useRef();

    return(
        <div className="hero-container" ref={containerRef}>
            <div className="hero-content-wrapper">
                <div className="left-image-wrapper">
                    <StarryBackground />
                    <Suspense fallback={<div>Loading 3D...</div>}>
                        <LogoScene eventSource={containerRef}/>
                    </Suspense>
                </div>
                <div className="right-content-wrapper">
                    
                    <div className="main-heading">
                        Sri Lanka’s No 1 Event  Solutions Partner
                    </div>
                    <div className="description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                    </div>
                    <button className="action-btn">
                        Let’s plan your event 
                        <img src={NextBtn} alt="next button icon" />
                    </button>
                    
                </div>
            </div>
            <StarryBackground />
        </div>
    );
}

export default Hero;