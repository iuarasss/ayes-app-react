import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="w-full max-w-md mx-auto bg-[#F8FAFF] p-8 rounded-2xl relative shadow-sm">
      {/* Garis aksen biru di sebelah kanan sesuai desain */}
      <div className="absolute top-0 right-0 w-2 h-full bg-[#8296FF] rounded-r-2xl"></div>

      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">
          Create your account
        </h2>
        <p className="text-xs text-gray-400">
          Unlock all Features!
        </p>
      </div>

      {/* Form */}
      <form className="space-y-4">
        
        {/* Username/Full Name */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Username"
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-blue-100 bg-[#F0F4FF] text-sm text-gray-700 placeholder-blue-300 focus:outline-none focus:border-[#8296FF] transition"
          />
        </div>

        {/* Email */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-blue-100 bg-[#F0F4FF] text-sm text-gray-700 placeholder-blue-300 focus:outline-none focus:border-[#8296FF] transition"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-blue-100 bg-[#F0F4FF] text-sm text-gray-700 placeholder-blue-300 focus:outline-none focus:border-[#8296FF] transition"
          />
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-blue-100 bg-[#F0F4FF] text-sm text-gray-700 placeholder-blue-300 focus:outline-none focus:border-[#8296FF] transition"
          />
        </div>

        {/* Terms Checkbox */}
        <div className="flex items-center gap-2 py-2">
          <input
            type="checkbox"
            id="terms"
            className="w-3.5 h-3.5 rounded border-gray-300 text-[#8296FF] focus:ring-[#8296FF]"
          />
          <label htmlFor="terms" className="text-[11px] text-gray-400">
            Accept <span className="text-[#8296FF] cursor-pointer hover:underline">terms and conditions</span>
          </label>
        </div>

        {/* Button */}
        {/* Di desain Figma tertulis LOG IN meskipun ini form signup, 
            tapi saya gunakan teks yang lebih relevan. Ubah ke "LOG IN" jika ingin sama persis. */}
        <button
          type="submit"
          className="w-full bg-[#8296FF] hover:bg-[#6c82f4] text-white py-3 rounded-lg text-sm font-bold tracking-wide transition shadow-sm"
        >
          CREATE ACCOUNT
        </button>

      </form>

      {/* Login Link */}
      <p className="text-center text-xs text-gray-400 mt-6">
        You have account?{' '}
        <Link
          to="/auth/login"
          className="text-[#8296FF] font-semibold hover:underline"
        >
          Login now
        </Link>
      </p>

    </div>
  );
};

export default Register;