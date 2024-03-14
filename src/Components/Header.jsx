import React from "react";
import porfile from "../assets/images/boy2.png";

const Header = () => {
  return (
    <div className="flex justify-between border-b items-center">
      <h2 className="font-bold text-2xl">Knowledge Cafe</h2>
      <img className="w-16 h-16" src={porfile} alt="" />
    </div>
  );
};

export default Header;
