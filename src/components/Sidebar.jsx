import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Ticket,
  BriefcaseBusiness,
  CreditCard,
  Boxes,
} from "lucide-react";

const Sidebar = () => {
  const menuClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${
      isActive
        ? "bg-[#6C63FF] text-white shadow-md"
        : "text-gray-600 hover:bg-gray-100"
    }`;

  return (
    <div
      className="
      w-64 h-screen
      bg-white
      border-r border-gray-200
      fixed left-0 top-0
      px-5 py-6
      flex flex-col
    "
    >
      {/* LOGO */}

      <div className="px-2 mb-8">
        <h1
          className="
          text-2xl
          font-bold
          text-gray-800
        "
        >
          Trip
          <span className="text-[#6C63FF]">ora</span>.
        </h1>

        <p
          className="
          text-xs
          text-gray-400
          mt-1
        "
        >
          Travel Agent Dashboard
        </p>
      </div>

      <div className="border-b mb-5"></div>

      {/* MAIN MENU */}

      <p
        className="
        text-[11px]
        font-semibold
        text-gray-300
        px-3
        mb-3
      "
      >
        MAIN MENU
      </p>

      <div className="flex flex-col gap-1">
        <NavLink to="/" className={menuClass}>
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        <NavLink to="/customers" className={menuClass}>
          <Users size={18} />
          Customers
        </NavLink>

        <NavLink to="/bookings" className={menuClass}>
          <Ticket size={18} />
          Bookings
        </NavLink>

        <NavLink to="/tour-packages" className={menuClass}>
          <BriefcaseBusiness size={18} />
          Tour Packages
        </NavLink>

        <NavLink to="/payments" className={menuClass}>
          <CreditCard size={18} />
          Payments
        </NavLink>

        <NavLink to="/admin/users" className={menuClass}>
          <Users size={18} />
          Users
        </NavLink>
      </div>

      {/* DEVELOPER */}

      <p
        className="
        text-[11px]
        font-semibold
        text-gray-300
        px-3
        mt-8
        mb-3
      "
      >
        DEVELOPER
      </p>

      <NavLink to="/components" className={menuClass}>
        <Boxes size={18} />
        Components
      </NavLink>

      {/* PROMO CARD */}

      <div className="mt-auto">
        <div
          className="
          bg-[#6C63FF]
          rounded-2xl
          p-5
          text-white
          mb-5
        "
        >
          <p
            className="
            text-sm
            leading-relaxed
            font-medium
          "
          >
            Discover new tour
            <br />
            packages and grow
            <br />
            your travel business!
          </p>

          <div
            className="
            flex
            items-center
            justify-between
            mt-4
          "
          >
            <NavLink
              to="/tour-packages/create"
              className="
                bg-white
                text-[#6C63FF]
                px-4
                py-2
                rounded-xl
                text-xs
                font-semibold
                hover:bg-gray-100
                transition
              "
            >
              + Add Package
            </NavLink>
          </div>
        </div>

        {/* FOOTER */}

        <div
          className="
          text-center
          text-xs
          text-gray-400
        "
        >
          <p>Tripora Admin Dashboard</p>

          <p className="mt-1">© 2025 All Right Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
