import React from 'react'
import img11 from "../Images/img11.png";
import img22 from "../Images/img22.png";
import img33 from "../Images/img33.png";
import img44 from "../Images/img44.png";
import "../css/Companies.css"

export const Analytics = () => {
  return (
    <>
      <div className="contanac">
        <div className="headanac">
          <h2>Companies</h2>
          <p>32</p>
        </div>
        <div className="d1c">
          <img className="img11" src={img11} alt='' />
        </div>
        <div className="d2c">
          <img className="img22" src={img22} alt='' />
        </div>
        <div className="d3c">
          <img className="img33" src={img33} alt='' />
        </div>
        <div className="d4c">
          <img className="img44" src={img44} alt='' />
        </div>

      </div>
    </>
  )
}

export default Analytics;