import React from "react";

const NavBar = () => {
  return (
    <div className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-center items-center">
        <a
          className="text-white text-2xl font-bold hover:text-gray-300 transition-colors duration-300"
          href="#"
        >
          Breaking News
        </a>
      </div>
    </div>
  );
};

export default NavBar;
