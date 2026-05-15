import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex">

     

      {/* Right */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#f5f7fb] p-8">

        <div className="w-full max-w-md bg-white rounded-3xl shadow-sm p-10">
          <Outlet />
        </div>

      </div>

    </div>
  );
};

export default AuthLayout;