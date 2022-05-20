import React from "react";
import { BellIcon, MenuIcon } from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <div className="flex justify-between lg:justify-end items-center ">
      <MenuIcon className="w-7 cursor-pointer lg:hidden" />
      <div className="flex items-center space-x-3">
        <div className=" flex space-x-2">
          <div className="relative">
            <BellIcon className="w-5" />
            <span className="bg-red-500 w-2 h-2 rounded-full absolute top-0 right-0"></span>
          </div>
          <span>Notification</span>
        </div>
        <span>|</span>
        <div className="flex space-x-2 items-center">
          <p className="text-lg">Jane Doe</p>
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="w-11 h-11 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
