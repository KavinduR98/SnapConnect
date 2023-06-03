import React, {useContext } from "react";
import coverImg from "../../assets/images/cover.jpg";
import { Tooltip } from "@material-tailwind/react";
import { Avatar } from "@material-tailwind/react";
import avatar from "../../assets/images/avatar.jpg";
import { AuthContext } from "../AppContext/AppContext";
import { Button } from "@material-tailwind/react";

const LeftSide = () => {

  const { user, userData } = useContext(AuthContext);


  return (
    <div className="flex flex-col h-screen bg-white pb-4 border-2 rounded-r-xl shadow-lg">
      <div className="flex flex-col items-center relative mt-4">
        <img
          className="h-28 w-full rounded-r-xl"
          src={coverImg}
          alt="nature"
        ></img>
        <div className="absolute -bottom-4">
          <Tooltip content="Profile" placement="top">
            <Avatar size="md" src={user?.photoURL || avatar} alt="avatar"></Avatar>
          </Tooltip>
        </div>
      </div>
      <div className="flex flex-col items-center pt-6">
        <p className="font-roboto font-medium text-md text-gray-700 no-underline tracking-normal leading-none">
          {user?.name || userData?.name}
        </p>
      </div>
      <div className="flex flex-col items-center pt-6">
        <p className="font-roboto font-medium text-md text-gray-700 no-underline tracking-normal leading-none">
          {user?.email || userData?.email}
        </p>
      </div>
      <div className="rounded-full mt-6 flex justify-center">
      <Button variant="outlined">Edit Profile</Button>
    </div>
    </div>
  );
};

export default LeftSide;
