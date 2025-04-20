import React from "react";
import './Achievement.scss'

const Achievement = () => {
    return (
        <div className="achievement-container">
            <img
                className="achievement-container__bg"
                src=".\assets\Building-bg.png"
                alt=""
            />
            <div className="wrapper">
                <h1 className="bold"> <span className="color">Everlasting Trust,</span> it's What<br /> We Build</h1>
                <div className="contents">
                    <div className="projects-completed">
                        <div className="projects-completed__contents">
                            <h1>500+</h1>
                            <h2> Projects <br />Completed</h2>
                        </div>
                        <img className="projects-completed__image"
                            src=".\assets\icons\project.png"
                            alt=""
                        />
                    </div>
                    <div className="years-of-experience">
                        <div className="years-of-experience__contents">
                            <h1>24+</h1>
                            <h2> Years of <br />Experience</h2>
                        </div>
                        <img className="years-of-experience__image"
                            src=".\assets\icons\worker.png"
                            alt=""
                        />
                    </div>
                    <div className="awards">
                        <div className="awards__contents">
                            <h1>8+</h1>
                            <h2> Awards</h2>
                        </div>
                        <img className="awards__image"
                            src=".\assets\icons\awards.png"
                            alt=""
                        />
                    </div>
                    <div className="clients">
                        <div className="clients__contents">
                            <h1>150+</h1>
                            <h2> Clients</h2>
                        </div>
                        <img className="clients__image"
                            src=".\assets\icons\clients.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievement;
