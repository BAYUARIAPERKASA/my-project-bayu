import React from "react";
import { FaSearch } from "react-icons/fa"; // Ensure you have installed react-icons

function Header() {
  return (
    <header className="bg-gradient-to-r from-pink-700 to-cyan-500 text-white p-4 flex items-center justify-between fixed top-0 left-0 right-0 z-20">
      <div className="flex items-center">
        <img
          src="https://akademik.unbin.ac.id/images/unbin.png"
          alt="Logo"
          className="w-10 h-10 mr-2"
        />
        <h1 className="text-lg hover:bg-purple-500 font-extrabold tracking-wider uppercase mt-2">
          Universitas Binaniaga Indonesia
        </h1>
      </div>

      <div className="flex items-center border rounded-lg overflow-hidden bg-white flex-grow max-w-xs mr-2">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border-none outline-none rounded-l-lg w-full"
        />
        <button className="bg-gray-200 text-black p-2 rounded-r-lg flex items-center">
          <FaSearch />
        </button>
      </div>

      <div className="flex items-center">
        <img
          src="https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-701751695033488zipyc2pvo5.png"
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
      </div>
    </header>
  );
}

export default Header;
