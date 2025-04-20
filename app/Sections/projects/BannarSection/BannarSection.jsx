import React from 'react';
import './Bannar.scss'; 

const BannarSection = () => {
    return (
        <div className="bannerSec">
            <div className="bannerImgSec">
                <span className="overlay"></span>
                <img src=".\assets\Carousel\img2.jpg" alt="" />
            </div>
            <div className="textContent">
                <h1>Projects</h1>
            </div>
        </div>
        
       
    );
};

export default BannarSection;