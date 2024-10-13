import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaBook,
  FaCalendarAlt,
  FaMoneyBillWave,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="bg-white text-black w-64 fixed top-8 left-0 bottom-0 z-10 shadow-lg overflow-y-auto">
      <div className="mt-16">
        <NavLink
          to="/menu-a"
          className="flex items-center py-3 px-4 rounded transition duration-200 hover:bg-pink-600"
        >
          <FaHome className="mr-2 text-gray-800 transition duration-200 hover:text-white text-xl" />
          Menu Utama
        </NavLink>
        <NavLink
          to="/menu-b"
          className="flex items-center py-3 px-4 rounded transition duration-200 hover:bg-pink-600"
        >
          <FaUser className="mr-2 text-gray-800 transition duration-200 hover:text-white text-xl" />
          Biodata Mahasiswa
        </NavLink>
        <NavLink
          to="/menu-c"
          className="flex items-center py-3 px-4 rounded transition duration-200 hover:bg-pink-600"
        >
          <FaBook className="mr-2 text-gray-800 transition duration-200 hover:text-white text-xl" />
          Rencana Pembelajaran
        </NavLink>
        <NavLink
          to="/menu-d"
          className="flex items-center py-3 px-4 rounded transition duration-200 hover:bg-pink-600"
        >
          <FaCalendarAlt className="mr-2 text-gray-800 transition duration-200 hover:text-white text-xl" />
          Jadwal Matakuliah
        </NavLink>
        <NavLink
          to="/menu-e"
          className="flex items-center py-3 px-4 rounded transition duration-200 hover:bg-pink-600"
        >
          <FaMoneyBillWave className="mr-2 text-gray-800 transition duration-200 hover:text-white text-xl" />
          Daftar Pembayaran Keuangan
        </NavLink>
      </div>
    </aside>
  );
}

export default Sidebar;
