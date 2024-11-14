import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [drop, setDrop] = useState(false);

  const toggleDropdown = () => {
    setDrop(prev => !prev);
  };

  return (
    <div className="z-10 navbar flex justify-between items-center w-full px-6 py-4 bg-black bg-opacity-50 text-white fixed top-0 left-0">
      <div className="logo text-xl font-bold">Logo</div>

      {/* Burger Icon for Mobile Menu */}
      <div className="burgerIcon md:hidden z-20">
        {drop ? (
          <FiX className='text-black' size={24} onClick={toggleDropdown} />
        ) : (
          <FaBars size={24} onClick={toggleDropdown} />
        )}
      </div>

      {/* Navigation Links */}
      <div
        className={`navLinks flex gap-10 items-center md:flex md:static md:bg-transparent md:h-auto md:w-auto ${
          drop ? 'flex-col bg-white text-black fixed inset-0 h-full w-full justify-center' : 'hidden'
        }`}
      >
        <NavLink
          to="/"
          className="nav-link text-lg hover:text-sky-600 transition-all duration-75"
          onClick={() => setDrop(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="nav-link text-lg hover:text-sky-600 transition-all duration-75"
          onClick={() => setDrop(false)}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className="nav-link text-lg hover:text-sky-600 transition-all duration-75"
          onClick={() => setDrop(false)}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
