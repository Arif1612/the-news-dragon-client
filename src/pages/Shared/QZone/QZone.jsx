import React from "react";
import QZone1 from "./../../../assets/qZone1.png";
import QZone2 from "./../../../assets/qZone2.png";
import QZone3 from "./../../../assets/qZone3.png";

const QZone = () => {
  return (
    <div className="py-5">
      <h1>Q-Zone</h1>
      <div className="text-center" >
        <div>
          <img src={QZone1} alt="" />
         
        </div>
        <div>
          <img src={QZone2} alt="" />
        
        </div>
        <div>
          <img src={QZone3} alt="" />
        
        </div>
      </div>
    </div>
  );
};

export default QZone;
