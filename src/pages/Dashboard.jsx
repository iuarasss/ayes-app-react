import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Booking',
      value: '$24,500',
    },
    {
      title: 'Revenue',
      value: '$18,680',
    },
    {
      title: 'Customers',
      value: '$50,680',
    },
    {
      title: 'Packages',
      value: '$16,590',
    },
  ];

  const bookings = [
    {
      name: 'Bali Adventure',
      status: 'Pending',
      price: '$250',
    },
    {
      name: 'Japan Sakura',
      status: 'Success',
      price: '$820',
    },
    {
      name: 'Dubai City Tour',
      status: 'Pending',
      price: '$410',
    },
    {
      name: 'Europe Trip',
      status: 'Success',
      price: '$1200',
    },
  ];

  return (
    <div className="bg-[#f5f7fb] min-h-screen">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 p-8">

        {/* Topbar */}
        <div className="flex justify-between items-center mb-8">
          
          {/* Left */}
          <div>
            <p className="text-sm text-gray-400">
              My View
            </p>

            <h1 className="text-3xl font-bold text-gray-800">
              Dashboard
            </h1>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">

            {/* Login Button */}
            <Link
              to="/auth/login"
              className="bg-[#6C63FF] hover:bg-[#5a52e0] text-white px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Login
            </Link>

            {/* Search */}
            <input
              type="text"
              placeholder="Search..."
              className="bg-white px-4 py-2 rounded-xl border border-gray-200 outline-none focus:border-[#6C63FF]"
            />

            {/* Avatar */}
            <img
              src="https://i.pravatar.cc/40"
              alt=""
              className="w-10 h-10 rounded-full"
            />

          </div>
        </div>

        {/* Statistic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-2xl shadow-sm"
            >
              <p className="text-sm text-gray-400 mb-2">
                {item.title}
              </p>

              <h2 className="text-2xl font-bold text-gray-800">
                {item.value}
              </h2>

              <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="w-2/3 bg-[#6C63FF] h-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* Pending Task */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-lg">
                Pending Task
              </h3>
            </div>

            <div className="space-y-5">

              <div className="border border-gray-100 rounded-xl p-4">
                <p className="text-sm text-gray-400 mb-2">
                  Pending Approval
                </p>

                <h2 className="text-2xl font-bold text-[#6C63FF]">
                  $1,200.00
                </h2>

                <button className="mt-4 w-full bg-[#6C63FF] text-white py-2 rounded-xl hover:bg-[#5a52e0] transition">
                  Approve
                </button>
              </div>

              <div className="border border-gray-100 rounded-xl p-4">
                <p className="text-sm text-gray-400 mb-2">
                  Unreported Advances
                </p>

                <h2 className="text-2xl font-bold text-[#6C63FF]">
                  $2,132.00
                </h2>

                <button className="mt-4 w-full border border-gray-300 py-2 rounded-xl hover:bg-gray-50 transition">
                  Details
                </button>
              </div>

            </div>
          </div>

          {/* Booking Table */}
          <div className="xl:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
            
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-lg">
                Recent Booking
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">

                <thead>
                  <tr className="text-left text-gray-400 text-sm border-b">
                    <th className="pb-3">Package</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3">Price</th>
                  </tr>
                </thead>

                <tbody>
                  {bookings.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b last:border-none"
                    >
                      <td className="py-4 font-medium text-gray-700">
                        {item.name}
                      </td>

                      <td
                        className={`py-4 font-medium ${
                          item.status === 'Success'
                            ? 'text-green-500'
                            : 'text-yellow-500'
                        }`}
                      >
                        {item.status}
                      </td>

                      <td className="py-4 text-gray-700">
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;