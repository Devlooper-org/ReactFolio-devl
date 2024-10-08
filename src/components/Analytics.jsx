import React from "react";
import "./Analytics.css";

const Analytics = () => {
  return (
    <div className="container ">
      <h1 className="text-white">Recognize your successes and keep working to accomplish more.</h1>
      <div className="grid-container text-white">
        <div className="grid-item">
          <h2>$812+</h2>
          <p>Money Raised</p>
          <span>
            Total Amount of money raised as a result of working with waki studio
          </span>
        </div>

        <div className="grid-item">
          <h2>400+</h2>
          <p>Our Client</p>
          <span>Total of clients around the world who have collaboarted with us</span>
        </div>

        <div className="grid-item">
          <h2>12+</h2>
          <p>Unicorn Award</p>
          <span>We have receiver various awards with projects and efforts</span>
        </div>

        <div className="grid-item">
          <h2>425+</h2>
          <p>Project Complete</p>
          <span>Various kinds of big projects that we have completed on time</span>
        </div>
      </div>
    </div>
  );
};
export default Analytics;
