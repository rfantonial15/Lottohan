import React from "react";

import logo from "/src/assets/logo.png";

const Header = () => {
  return (
    <header className="bg-white p-4 flex justify-between items-center mx-80">
      <div className="text-xl font-bold">
        <img src={logo} alt="Lottery Logo" className="h-10 inline-block mr-2" />
        Lottery
      </div>
      <nav>
        <a href="#" className="text-blue-500 mx-2">
          Home
        </a>
        <a href="#" className="text-blue-500 mx-2">
          Profile
        </a>
        <a href="#" className="text-blue-500 mx-2">
          Winning History
        </a>
      </nav>
      <button className="bg-gray-200 p-2 rounded">Logout</button>
    </header>
  );
};

export default Header;
