import React from 'react';

import logo from "/src/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-blue-900 p-4 text-center text-white">
      <img src={logo} alt="Lottery Logo" className="h-10 inline-block" />
    </footer>
  );
};

export default Footer;

