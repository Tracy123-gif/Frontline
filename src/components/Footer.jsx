import React, { useEffect, useRef } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Footer = () => {

   

  return (
    <div>
        <div className="footer bg-blue-500 w-screen py-14 px-16 text-white">
        <div className="footerContent max-w-7xl mx-auto flex flex-wrap justify-between gap-8">
          {/* Left Section */}
          <div className="left w-full md:w-1/2">
            <h1 className="text-3xl font-bold uppercase">The Frontline Church</h1>
            <p className="mt-4 text-base opacity-90">
              Evangelizing for the lost for the total transformation of the spirit, soul, and body, developing them into leaders.
            </p>
          </div>

          {/* Middle Section */}
          <div className="middle w-full md:w-1/4">
            <h2 className="text-xl font-semibold uppercase mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link to={'/About'} className="hover:underline">About Us</Link></li>
              <li><Link to={'/contact'} className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="right w-full md:w-1/4">
            <h2 className="text-xl font-semibold uppercase mb-4">Stay Connected</h2>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/CGMiNkpoluRumuigbo?mibextid=ZbWKwL" className="w-10 h-10 bg-white text-blue-500 rounded-full flex items-center justify-center hover:bg-gray-200">
                <FaFacebookF size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-white/20 pt-6 text-center text-sm opacity-75">
          &copy; 2024 The Frontline Church. All Rights Reserved.
        </div>
      </div>

    </div>
  )
}

export default Footer
