import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 text-sm text-gray-600">
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold text-lg mb-4 text-gray-800">Stay Connected</h4>
          <p>Jl. Dokter Hewan No. 1, Jakarta</p>
          <p>Phone: (+62) 812 3456 7890</p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4 text-gray-800">VetCare</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#1679ab]">Tentang Kami</a></li>
            <li><a href="#" className="hover:text-[#1679ab]">Karir</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4 text-gray-800">Newsletter</h4>
          <div className="flex bg-white rounded-full p-1 border">
            <input type="email" placeholder="Email Anda" className="bg-transparent outline-none px-4 w-full" />
            <button className="bg-[#1679ab] text-white px-6 py-2 rounded-full hover:bg-[#115b82]">Kirim</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;