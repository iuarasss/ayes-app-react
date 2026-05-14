import React from 'react';
import { Link } from 'react-router-dom';
import db from '../data/db.json';

const Dashboard = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4 w-full max-w-6xl mt-20">
          <h1 className="text-5xl md:text-7xl font-serif text-white font-bold tracking-wider mb-20 drop-shadow-lg">
            Explore, Dream, Travel
          </h1>
          
          {/* Booking Widget Area */}
          <div className="mx-auto w-[95%] md:w-[80%] lg:w-[70%]">
            {/* Tabs */}
            <div className="flex w-max bg-white rounded-t-2xl overflow-hidden">
              <button className="bg-[#1679ab] text-white px-8 py-3 flex items-center gap-2 font-medium">
                ✈️ Flight
              </button>
              <button className="bg-white text-gray-600 px-8 py-3 flex items-center gap-2 font-medium hover:bg-gray-50">
                🏨 Hotel
              </button>
            </div>
            
            {/* Form Inner */}
            <div className="bg-white p-6 rounded-b-2xl rounded-tr-2xl shadow-xl flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="flex-1 bg-gray-50 p-4 rounded-xl flex items-center justify-between border border-gray-100">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Living From</p>
                  <h4 className="font-semibold text-gray-800">Dubai</h4>
                </div>
                <div className="bg-white p-2 rounded-full shadow-sm">✈️</div>
                <div className="text-right">
                  <p className="text-xs text-gray-400 mb-1">Going to</p>
                  <h4 className="font-semibold text-gray-800">Istanbul</h4>
                </div>
              </div>
              
              <div className="flex-1 bg-gray-50 p-4 rounded-xl flex items-center justify-between border border-gray-100">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Leave</p>
                  <h4 className="font-semibold text-gray-800">23 Jan, Sat</h4>
                </div>
                <div className="bg-white p-2 rounded-full shadow-sm">📅</div>
                <div className="text-right">
                  <p className="text-xs text-gray-400 mb-1">Return</p>
                  <h4 className="font-semibold text-gray-800">14 Jan, Thu</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Offers Section */}
      <section className="pt-24 pb-20 bg-[#f9fafb]">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Upcoming Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {db.offers.map((offer) => (
              <div key={offer.id} className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">{offer.title}</h3>
                <img src={offer.image} alt={offer.title} className="w-full h-40 object-cover rounded-2xl mb-4" />
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-4 px-2">
                  <span className={`px-3 py-1 rounded-full ${offer.tag === 'Chill' ? 'bg-blue-100 text-blue-600' : 'bg-pink-100 text-pink-600'}`}>
                    {offer.tag}
                  </span>
                  <span>{offer.duration}</span>
                  <span>{offer.date}</span>
                </div>
                <div className="flex items-center justify-between px-2">
                  <span className="text-lg text-gray-800"><span className="font-bold">{offer.price}</span>/Person</span>
                  <Link to="/booking" className="bg-[#1679ab] text-white px-5 py-2 rounded-full text-xs font-medium hover:bg-[#115b82] transition-colors">
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;