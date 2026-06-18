import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Plane,
  Receipt,
  FileText,
  Settings,
  Users,
  BarChart3,
  Boxes
} from "lucide-react";

const Sidebar = () => {
  const menuClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${
      isActive
        ? "bg-[#6C63FF] text-white shadow-md"
        : "text-gray-600 hover:bg-gray-100"
    }`;

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 fixed left-0 top-0 p-5 flex flex-col">
      {/* Logo */}
      <div className="mb-10 flex justify-center">
        <h1 className="text-2xl font-bold text-[#6C63FF]">Tripora.</h1>
      </div>

      {/* Menu */}
      <div className="flex flex-col gap-2">
        <NavLink to="/" className={menuClass}>
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        <NavLink to="/trips" className={menuClass}>
          <Plane size={18} />
          Trips
        </NavLink>

        <NavLink to="/booking" className={menuClass}>
          <Receipt size={18} />
          Booking
        </NavLink>

        <NavLink to="/reports" className={menuClass}>
          <FileText size={18} />
          Reports
        </NavLink>

        <NavLink to="/customers" className={menuClass}>
          <Users size={18} />
          Customers
        </NavLink>

        <NavLink to="/analytics" className={menuClass}>
          <BarChart3 size={18} />
          Analytics
        </NavLink>
      </div>

      <NavLink to="/components" className={menuClass}>
        <Boxes size={18} />
        Components
      </NavLink>

      {/* Bottom */}
      <div className="mt-auto">
        <NavLink to="/settings" className={menuClass}>
          <Settings size={18} />
          Settings
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
