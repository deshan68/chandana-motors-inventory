import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primaryDark w-full h-[100px] md:text-5xl text-2xl font-bold text-primaryYellow flex items-center pl-4">
      <Link to={"/"}>New Chandana Motors</Link>
    </nav>
  );
};

export default Navbar;
