import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Users, Ticket, BriefcaseBusiness, CreditCard } from "lucide-react";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    customers: "0",
    bookings: "0",
    packages: "0",
    revenue: "0",
  });

  useEffect(() => {
    setDashboardData({
      customers: "1,240",
      bookings: "325",
      packages: "86",
      revenue: "$24,500",
    });
  }, []);

  const stats = [
    {
      title: "Customers",
      value: dashboardData.customers,
      icon: <Users size={22} />,
    },

    {
      title: "Bookings",
      value: dashboardData.bookings,
      icon: <Ticket size={22} />,
    },

    {
      title: "Tour Packages",
      value: dashboardData.packages,
      icon: <BriefcaseBusiness size={22} />,
    },

    {
      title: "Revenue",
      value: dashboardData.revenue,
      icon: <CreditCard size={22} />,
    },
  ];

  const bookings = [
    {
      customer: "Ayu Sara",
      package: "Bali Adventure",
      payment: "Paid",
      status: "Completed",
    },

    {
      customer: "Rizky",
      package: "Japan Sakura",
      payment: "Pending",
      status: "Waiting",
    },

    {
      customer: "Nadia",
      package: "Dubai City Tour",
      payment: "Paid",
      status: "Completed",
    },
  ];

  const customerGrowth = [40, 55, 65, 80, 95];

  return (
    <div className="bg-[#f5f7fb] min-h-screen">
      <Sidebar />

      <main
        className="
ml-
px-8
py-7
"
      >
        {/* HEADER */}

        <div
          className="
flex
justify-between
items-center
mb-8
"
        >
          {/* TITLE */}

          <div>
            <p
              className="
text-sm
text-gray-400
"
            >
              Customer Relationship Management
            </p>

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

          {/* RIGHT HEADER */}

          <div
            className="
flex
items-center
gap-4
"
          >
            {/* SEARCH */}

            <div
              className="
relative
"
            >
              <input
                type="text"
                placeholder="Search customer, booking..."
                className="
w-72
bg-white
px-5
py-3
rounded-xl
border
border-gray-200
outline-none
focus:border-[#6C63FF]
text-sm
"
              />
            </div>

            {/* NOTIFICATION */}

            <button
              className="
w-11
h-11
bg-white
rounded-xl
shadow-sm
flex
items-center
justify-center
text-gray-500
hover:text-[#6C63FF]
"
            >
              🔔
            </button>

            {/* PROFILE */}

            <div
              className="
flex
items-center
gap-3
bg-white
px-3
py-2
rounded-xl
shadow-sm
"
            >
              <img
                src="https://i.pravatar.cc/40"
                className="
w-10
h-10
rounded-full
"
              />

              <div
                className="
hidden
md:block
"
              >
                <p
                  className="
text-sm
font-semibold
text-gray-700
"
                >
                  Admin Tripora
                </p>

                <p
                  className="
text-xs
text-gray-400
"
                >
                  Travel Manager
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* STAT CARD */}

        <div
          className="
grid
grid-cols-4
gap-6
mb-8
"
        >
          {stats.map((item, index) => (
            <div
              key={index}
              className="
bg-white
rounded-2xl
p-6
shadow-sm
flex
justify-between
items-center
"
            >
              <div>
                <p className="text-gray-400 text-sm">{item.title}</p>

                <h2
                  className="
text-2xl
font-bold
mt-2
"
                >
                  {item.value}
                </h2>
              </div>

              <div
                className="
bg-[#6C63FF]/10
text-[#6C63FF]
p-3
rounded-xl
"
              >
                {item.icon}
              </div>
            </div>
          ))}
        </div>

        {/* GRAPH AREA */}

        <div
          className="
grid
grid-cols-2
gap-6
mb-8
"
        >
          {/* CUSTOMER GRAPH */}

          <div
            className="
bg-white
rounded-2xl
p-6
"
          >
            <h3
              className="
font-semibold
text-lg
mb-6
"
            >
              Customer Growth
            </h3>

            <div
              className="
flex
items-end
gap-5
h-52
"
            >
              {customerGrowth.map((item, index) => (
                <div
                  key={index}
                  className="
flex-1
bg-[#6C63FF]
rounded-t-xl
transition
"
                  style={{
                    height: `${item}%`,
                  }}
                />
              ))}
            </div>

            <div
              className="
flex
justify-between
text-xs
text-gray-400
mt-3
"
            >
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
            </div>
          </div>

          {/* BOOKING STATUS */}

          <div
            className="
bg-white
rounded-2xl
p-6
"
          >
            <h3
              className="
font-semibold
text-lg
mb-6
"
            >
              Booking Performance
            </h3>

            <div className="space-y-5">
              <div>
                <div
                  className="
flex
justify-between
text-sm
mb-2
"
                >
                  <span>Completed</span>

                  <span>75%</span>
                </div>

                <div
                  className="
h-3
bg-gray-100
rounded-full
"
                >
                  <div
                    className="
h-full
w-3/4
bg-green-500
rounded-full
"
                  />
                </div>
              </div>

              <div>
                <div
                  className="
flex
justify-between
text-sm
mb-2
"
                >
                  <span>Pending</span>

                  <span>25%</span>
                </div>

                <div
                  className="
h-3
bg-gray-100
rounded-full
"
                >
                  <div
                    className="
h-full
w-1/4
bg-yellow-400
rounded-full
"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RECENT BOOKING */}

        <div
          className="
bg-white
rounded-2xl
p-6
"
        >
          <div
            className="
flex
justify-between
mb-5
"
          >
            <h3 className="font-semibold text-lg">Recent Booking</h3>

            <button
              className="
text-[#6C63FF]
text-sm
"
            >
              View All
            </button>
          </div>

          <table className="w-full">
            <thead>
              <tr
                className="
text-gray-400
text-sm
border-b
"
              >
                <th className="text-left pb-3">Customer</th>

                <th>Package</th>

                <th>Payment</th>

                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((item, index) => (
                <tr
                  key={index}
                  className="
border-b
last:border-none
text-sm
"
                >
                  <td className="py-4">{item.customer}</td>

                  <td>{item.package}</td>

                  <td>{item.payment}</td>

                  <td
                    className={
                      item.status === "Completed"
                        ? "text-green-500"
                        : "text-yellow-500"
                    }
                  >
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
