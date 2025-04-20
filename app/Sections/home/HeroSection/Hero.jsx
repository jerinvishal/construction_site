import React from "react";
import './Hero.scss'

const Hero = () => {
  return (
        <div className="heroSec">
            <div className="bannerImg">
                <img className="bgImg" src=".\assets\Carousel\img1.jpg"/>
                <span className="overlay"></span>
            </div>
            <div className="bannerSubImg">
                <img src=".\assets\Carousel\img1.jpg" alt="" />
            </div>
            <div className="bannerText">
                <h1 >
                <span className="color">Building Landmarks</span>
                    <br /> Creating Futures
                </h1>
                <p>
                    “ With over 20 years of excellence, we deliver worldclass
                    construction solutions tailored to your vision. ”
                </p>
                <button>Contact Us</button>
            </div>
        </div>
  );
};

export default Hero;
