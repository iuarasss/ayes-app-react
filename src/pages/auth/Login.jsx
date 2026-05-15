import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-1">
        Login to your Account
      </h2>

      <p className="text-xs text-gray-400 text-center mb-6">
        Welcome back! Select method to log in:
      </p>

      {/* Social Login Buttons */}
      <div className="flex gap-4 mb-6">
        <button type="button" className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition text-xs font-semibold text-gray-700">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-4 h-4" />
          Google
        </button>
        <button type="button" className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition text-xs font-semibold text-gray-700">
          <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" className="w-4 h-4" />
          Facebook
        </button>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 mb-6">
        <hr className="flex-1 border-gray-200" />
        <span className="text-[10px] text-gray-400">or continue with email</span>
        <hr className="flex-1 border-gray-200" />
      </div>

      <form className="space-y-4">
        {/* Email */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-blue-100 bg-[#F0F4FF] text-sm text-gray-700 placeholder-blue-300 focus:outline-none focus:border-[#6B7CFF] focus:ring-1 focus:ring-[#6B7CFF] transition"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
          </div>
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-10 pr-10 py-3 rounded-lg border border-blue-100 bg-[#F0F4FF] text-sm text-gray-700 placeholder-blue-300 focus:outline-none focus:border-[#6B7CFF] focus:ring-1 focus:ring-[#6B7CFF] transition"
          />
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer">
            <svg className="w-4 h-4 text-blue-400 hover:text-[#6B7CFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
          </div>
        </div>

        {/* Remember me & Forgot Password */}
        <div className="flex justify-between items-center mt-2">
          <label className="flex items-center text-[11px] text-gray-400 cursor-pointer">
            <input 
              type="checkbox" 
              className="mr-2 w-3.5 h-3.5 rounded border-gray-300 text-[#6B7CFF] focus:ring-[#6B7CFF]" 
            />
            Remember me
          </label>
          <Link
            to="/auth/forgot"
            className="text-[11px] text-[#6B7CFF] hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-[#6B7CFF] hover:bg-[#5869e8] text-white py-3 rounded-lg text-sm font-bold tracking-wide transition mt-2"
        >
          LOG IN
        </button>
      </form>

      {/* Register */}
      <p className="text-center text-[11px] text-gray-400 mt-6">
        Don't have account?{' '}
        <Link
          to="/auth/register"
          className="text-[#6B7CFF] font-semibold hover:underline"
        >
          Create an account
        </Link>
      </p>
    </div>
  );
};

export default Login;