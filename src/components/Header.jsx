import { useState, useEffect } from 'react';
import logo from '../img/LOGO.png';

const Header = ({active, toggleActive}) => {

  return (
    <>
      <header className="header z-10 bg-white fixed w-full h-16">

        <div className="container flex justify-around items-center min-h-18 max-w-full max-h-full h-20">
          <img src={logo} alt="Logo" className="w-max" />
          <div onClick={toggleActive} className={active ? 'burger cursor-pointer' : 'burger cursor-pointer'}>
            <span className="block w-10 h-1 bg-black mb-3 mt-3"></span>
            <span className="block w-10 h-1 bg-black mb-3"></span>
            <span className="block w-7 h-1 bg-black mb-3 ml-auto"></span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;