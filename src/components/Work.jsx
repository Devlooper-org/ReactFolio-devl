import React from "react";
import './Work.css';

const Work = () => {
  return (
    <div className="work-container">
      <div className="work-text">
        <h2>Our Work</h2>
        <h1 className="text-white">How we can produce work that you are interseted in</h1>
      </div>

      <div className="Work-Img">
        <p>UIUX Design / MOSEOM 2022</p>
        <img src="src/WorkImg1.png" alt="" />
        <p>UIUX Design / MUSIC PLAYER 2019</p>
        <img src="src/WorkImg2.png" alt="" />
      </div>
    </div>
  )
}

export default Work;
