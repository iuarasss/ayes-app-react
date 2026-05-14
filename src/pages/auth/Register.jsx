import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Join Travello</h2>
      <p className="text-gray-500 mb-8">Sign up to get the best travel deals around the world.</p>
      <form className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Full Name</label>
          <input 
            type="text" 
            placeholder="John Doe" 
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#1679ab]" 
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Email</label>
          <input 
            type="email" 
            placeholder="explorer@example.com" 
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#1679ab]" 
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Password</label>
          <input 
            type="password" 
            placeholder="••••••••" 
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#1679ab]" 
          />
        </div>
        <button 
          type="button" 
          className="w-full bg-[#1679ab] text-white py-3 rounded-xl font-bold hover:bg-[#115b82] mt-4 transition"
        >
          Register
        </button>
      </form>
      <p className="text-center text-sm text-gray-500 mt-6">
        Already have an account? <Link to="/auth/login" className="text-[#1679ab] font-bold hover:underline">Login here</Link>
      </p>
    </div>
  );
};

export default Register;