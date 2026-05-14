import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Forgot Password?</h2>
      <p className="text-gray-500 mb-8">Enter your email address, and we'll send you a link to get back to your travel plans.</p>
      <form className="space-y-5">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Registered Email</label>
          <input type="email" placeholder="explorer@example.com" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#1679ab]" />
        </div>
        <button type="button" className="w-full bg-[#1679ab] text-white py-3 rounded-xl font-bold hover:bg-[#115b82] transition">Send Reset Link</button>
      </form>
      <div className="text-center mt-6">
        <Link to="/auth/login" className="text-sm text-gray-500 hover:text-[#1679ab] hover:underline">&larr; Back to Login</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;