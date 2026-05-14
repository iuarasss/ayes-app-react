import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive 
        ? 'text-[#1679ab] border-b-2 border-[#1679ab]' 
        : scrolled ? 'text-gray-700 hover:text-[#1679ab]' : 'text-white hover:text-gray-200'
    }`;

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 lg:px-16 flex justify-between items-center">
        <Link to="/" className={`text-2xl font-bold tracking-widest ${scrolled ? 'text-[#1679ab]' : 'text-white'}`}>
          TRAVELLO
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          <NavLink to="/" className={navClass} end>Home</NavLink>
          <NavLink to="/offers" className={navClass}>Offers</NavLink>
          <NavLink to="/ebook" className={navClass}>E-book</NavLink>
          <NavLink to="/destinations" className={navClass}>Destinations</NavLink>
          <NavLink to="/blog" className={navClass}>Blog</NavLink>
          <NavLink to="/contact" className={navClass}>Contact Us</NavLink>
          
          <Link to="/auth/login" className={`ml-4 px-5 py-2 rounded-full text-sm font-semibold transition-colors ${scrolled ? 'bg-[#1679ab] text-white hover:bg-[#115b82]' : 'bg-white text-[#1679ab] hover:bg-gray-100'}`}>
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;