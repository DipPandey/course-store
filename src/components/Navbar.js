import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <Link to="/" className="mr-4">Home</Link>
    </nav>
  );
};

export default Navbar;
