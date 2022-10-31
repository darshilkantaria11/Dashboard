import React from 'react'
import img1 from "../Images/img1.png";
import img2 from "../Images/img2.png";
import img3 from "../Images/img3.png";
import "../css/Analytics.css"

export const Analytics = () => {
  return (
    <>
      <div className="contana">
        <div className="headana">
          <h2>Analytics</h2>
          <p>Basic Preset ▼</p>
        </div>
        <div className="d1">
          <img className="img1" src={img1} alt='' />
        </div>
        <div className="d2">
          <img className="img2" src={img2} alt='' />
        </div>
        <div className="d3">
          <img className="img3" src={img3} alt='' />
        </div>

      </div>
    </>
  )
}

export default Analytics;