import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans">
      {/* Bagian Gambar Samping (Nuansa Travel) */}
      <div className="hidden md:flex md:w-1/2 bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80')] bg-cover bg-center items-center justify-center relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white p-10">
          <h1 className="text-5xl font-serif font-bold mb-4 tracking-widest">TRAVELLO</h1>
          <p className="text-xl font-light">Explore the world, dream bigger, and travel further.</p>
        </div>
      </div>
      
      {/* Bagian Form */}
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center p-8 relative">
        <Link to="/" className="absolute top-8 left-8 text-sm text-gray-500 hover:text-[#1679ab] flex items-center gap-2 transition-colors">
          &larr; Back to Home
        </Link>
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;