import React from 'react';
import './CompletedProject.scss';

const CompletedProjects = () => {
  return (
    <div className="completedProjects">
      <div className="left">
        <img src="./assets/about-us.png" alt="About Us" />
      </div>
      <div className="right">
        <h2>Completed Projects</h2>
        <div className="paragraph">
        <p>We are presently executing several mega projects ranging from high-speed rail & dedicated freight corridors to metro rail systems, from river & sea bridges to large water, power & solar infrastructure, many of which will be the first of their kind.</p>
        <p>Constructing to speed & scale, we continue to do what we do best: engineering defining infrastructure and building nations.</p>
        </div>
      </div>
    </div>
  );
};

export default CompletedProjects;