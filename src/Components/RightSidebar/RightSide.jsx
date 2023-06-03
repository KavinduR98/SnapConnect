import React from "react";
import image_01 from "../../assets/images/hiking.jpg";
import image_02 from "../../assets/images/elephants.jpg";
import image_03 from "../../assets/images/sunset.jpg";


const RightSide = () => {

  return (
    <div className="flex flex-col h-screen bg-white shadow-lg border-2 rounded-l-xl">
      <div className="flex flex-col items-center relative pt-4">
        <img className="h-48 rounded-md" src={image_01} alt="nature"></img>
      </div>
      <div className="flex flex-col items-center relative pt-4">
        <img className="h-48 rounded-md" src={image_02} alt="nature"></img>
      </div>
      <div className="flex flex-col items-center relative pt-4">
        <img className="h-48 w-72 rounded-md" src={image_03} alt="nature"></img>
      </div>
    </div>
  );
};

export default RightSide;
