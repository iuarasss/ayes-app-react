import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Booking",
      value: "$24,500",
    },
    {
      title: "Revenue",
      value: "$18,680",
    },
    {
      title: "Customers",
      value: "$50,680",
    },
    {
      title: "Packages",
      value: "$16,590",
    },
  ];

  const bookings = [
    {
      name: "Bali Adventure",
      status: "Pending",
      price: "$250",
    },
    {
      name: "Japan Sakura",
      status: "Success",
      price: "$820",
    },
    {
      name: "Dubai City Tour",
      status: "Pending",
      price: "$410",
    },
    {
      name: "Europe Trip",
      status: "Success",
      price: "$1200",
    },
  ];

  return (
    <div className="bg-[#f5f7fb] min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}

      <main
        className="
        
        px-4
        sm:px-6
        lg:px-8
        py-6
        "
      >
        {/* Topbar */}

        <div
          className="
          flex
          flex-col
          lg:flex-row
          lg:justify-between
          lg:items-center
          gap-5
          mb-8
          "
        >
          {/* Title */}

          <div>
            <p className="text-sm text-gray-400">My View</p>

            <h1
              className="
              text-3xl
              font-bold
              text-gray-800
              "
            >
              Dashboard
            </h1>
          </div>

          {/* Right Section */}

          <div
            className="
            flex
            flex-col
            sm:flex-row
            items-stretch
            sm:items-center
            gap-4
            "
          >
            <Link
              to="/auth/login"
              className="
              bg-[#6C63FF]
              hover:bg-[#5a52e0]
              text-white
              px-5
              py-2
              rounded-xl
              text-sm
              text-center
              shadow-sm
              "
            >
              Login
            </Link>

            <input
              type="text"
              placeholder="Search..."
              className="
              w-full
              sm:w-64
              bg-white
              px-4
              py-2
              rounded-xl
              border
              border-gray-200
              outline-none
              focus:border-[#6C63FF]
              "
            />

            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="
              w-10
              h-10
              rounded-full
              mx-auto
              sm:mx-0
              "
            />
          </div>
        </div>

        {/* Statistic Cards */}

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-5
          mb-8
          "
        >
          {stats.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                p-5
                rounded-2xl
                shadow-sm
                "
            >
              <p
                className="
                text-sm
                text-gray-400
                mb-2
                "
              >
                {item.title}
              </p>

              <h2
                className="
                  text-2xl
                  font-bold
                  text-gray-800
                  "
              >
                {item.value}
              </h2>

              <div
                className="
                  mt-4
                  h-2
                  bg-gray-100
                  rounded-full
                  overflow-hidden
                  "
              >
                <div
                  className="
                    w-2/3
                    bg-[#6C63FF]
                    h-full
                    "
                />
              </div>
            </div>
          ))}
        </div>

        {/* Content */}

        <div
          className="
          grid
          grid-cols-1
          xl:grid-cols-3
          gap-6
          "
        >
          {/* Pending Task */}

          <div
            className="
            bg-white
            rounded-2xl
            p-6
            shadow-sm
            "
          >
            <h3
              className="
              font-semibold
              text-lg
              mb-6
              "
            >
              Pending Task
            </h3>

            <div className="space-y-5">
              <div
                className="
                border
                border-gray-100
                rounded-xl
                p-4
                "
              >
                <p
                  className="
                text-sm
                text-gray-400
                mb-2
                "
                >
                  Pending Approval
                </p>

                <h2
                  className="
                  text-2xl
                  font-bold
                  text-[#6C63FF]
                  "
                >
                  $1,200.00
                </h2>

                <button
                  className="
                  mt-4
                  w-full
                  bg-[#6C63FF]
                  text-white
                  py-2
                  rounded-xl
                  "
                >
                  Approve
                </button>
              </div>

              <div
                className="
                border
                border-gray-100
                rounded-xl
                p-4
                "
              >
                <p
                  className="
                  text-sm
                  text-gray-400
                  mb-2
                  "
                >
                  Unreported Advances
                </p>

                <h2
                  className="
                  text-2xl
                  font-bold
                  text-[#6C63FF]
                  "
                >
                  $2,132.00
                </h2>

                <button
                  className="
                  mt-4
                  w-full
                  border
                  border-gray-300
                  py-2
                  rounded-xl
                  "
                >
                  Details
                </button>
              </div>
            </div>
          </div>

          {/* Booking Table */}

          <div
            className="
            xl:col-span-2
            bg-white
            rounded-2xl
            p-6
            shadow-sm
            "
          >
            <h3
              className="
              font-semibold
              text-lg
              mb-6
              "
            >
              Recent Booking
            </h3>

            <div className="overflow-x-auto">
              <table
                className="
                min-w-[600px]
                w-full
                "
              >
                <thead>
                  <tr
                    className="
                    text-left
                    text-gray-400
                    text-sm
                    border-b
                    "
                  >
                    <th className="pb-3">Package</th>

                    <th className="pb-3">Status</th>

                    <th className="pb-3">Price</th>
                  </tr>
                </thead>

                <tbody>
                  {bookings.map((item, index) => (
                    <tr
                      key={index}
                      className="
                      border-b
                      last:border-none
                      "
                    >
                      <td
                        className="
                        py-4
                        font-medium
                        text-gray-700
                        "
                      >
                        {item.name}
                      </td>

                      <td
                        className={`
                        py-4
                        font-medium
                        ${
                          item.status === "Success"
                            ? "text-green-500"
                            : "text-yellow-500"
                        }
                        `}
                      >
                        {item.status}
                      </td>

                      <td
                        className="
                      py-4
                      text-gray-700
                      "
                      >
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
