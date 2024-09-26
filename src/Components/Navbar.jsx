import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-6 px-12">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link to="/" className="flex items-center">
            Dr Gaurav Singal
          </Link>
        </div>
        <ul className="flex space-x-20">
          <li>
            <Link to="/" className="text-white hover:text-yellow-300 transition-colors duration-300">Home</Link>
          </li>
          <li>
            <Link to="/projects" className="text-white hover:text-yellow-300 transition-colors duration-300">Projects</Link>
          </li>
          <li>
            <Link to="/gallery" className="text-white hover:text-yellow-300 transition-colors duration-300">Gallery</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;