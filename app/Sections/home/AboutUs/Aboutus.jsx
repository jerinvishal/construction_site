import React from "react";
import {aboutUsDesc} from '../../../../data/aboutus'
import './Aboutus.scss'

const Aboutus = () => {
    return (
        <div className="about-us">
            <div className="wrapper">
            <h1 className="bold title"><span className="color">Who</span> We Are</h1>
                <div className="container">
                    <div className="left">
                        {/* <img className="neonEllipse" src="./assets/ellipse 2.png" alt="" /> */}
                        <img className="aboutImg" src="./assets/about-us.png" alt="" />
                        <div className="left__textContent">
                            <img src="./assets/" alt="" />
                        </div>
                    </div>
                    <div className="right">
                        {aboutUsDesc.map((data, i) => (
                            <div key={data.id} className="aboutus-desc">
                                <img src=".\assets\icons\circle-bullet.png" alt="" />
                                <p className="aboutus-desc__content">{data.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;
