import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-9xl font-bold text-[#1679ab]">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mt-4">Halaman Tidak Ditemukan</h2>
      <p className="text-gray-500 mt-2 mb-8">Maaf, halaman yang Anda cari mungkin telah dihapus atau URL-nya salah.</p>
      <Link to="/" className="bg-[#1679ab] text-white px-8 py-3 rounded-full font-medium hover:bg-[#115b82] transition">
        Kembali ke Beranda
      </Link>
    </div>
  );
};

export default NotFound;