import React from "react";

const Card = ({ name, img }) => {
  return (
    <div>
      <div className="relative">
        <img
          className="h-64 w-52 rounded-2xl hover:scale-105 duration-700 ease-in-out cursor-pointer shadow-lg"
          src={img}
          alt={name}
        ></img>
      </div>
    </div>
  );
};

export default Card;
