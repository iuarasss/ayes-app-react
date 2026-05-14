import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
      <p className="text-gray-500 mb-8">Ready for your next adventure? Please login.</p>
      <form className="space-y-5">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Email</label>
          <input type="email" placeholder="explorer@example.com" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#1679ab]" />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Password</label>
          <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#1679ab]" />
        </div>
        <div className="flex justify-end">
          <Link to="/auth/forgot" className="text-sm text-[#1679ab] hover:underline">Forgot password?</Link>
        </div>
        <button type="button" className="w-full bg-[#1679ab] text-white py-3 rounded-xl font-bold hover:bg-[#115b82] transition">Login</button>
      </form>
      <p className="text-center text-sm text-gray-500 mt-8">
        Don't have an account? <Link to="/auth/register" className="text-[#1679ab] font-bold hover:underline">Register now</Link>
      </p>
    </div>
  );
};

export default Login;