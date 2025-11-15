


import React from "react";
import { FiHome, FiUsers, FiSettings, FiLogOut } from "react-icons/fi";
import { useNavigate, Link } from "react-router-dom";
import DarTechnology from "../assets/image/image-removebg-preview.png";
import { MdAppBlocking } from "react-icons/md";

const HiddoAdminPanel = ({ adminPanelOpen, onItemClick }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  // Menu item click handler
  const handleMenuItemClick = () => {
    onItemClick(); // ✅ Parent component ko notify karenge
  };

  return (
    <div className="flex flex-col h-full">
      {/* Top Section */}
      <div className="flex items-center justify-between p-4 border-b-2 border-green-800">
        <div className="flex items-center gap-3">
          <img
            src={DarTechnology}
            alt="Logo"
            className={`transition-all duration-300 ${adminPanelOpen ? "w-10 h-10" : "w-8 h-8"
              }`}
          />
          {adminPanelOpen && (
            <h1 className="text-lg font-semibold tracking-wide">
              Hiddo
            </h1>
          )}
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-3 space-y-2">


        <Link
          to="/hiddo/hiddoHome"
          onClick={handleMenuItemClick} // ✅ Ye line add karo
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-200"
        >
          <FiHome size={20} />
          {adminPanelOpen && <span>DashBoard</span>}
        </Link>


        <Link
          to="/coin"
          onClick={handleMenuItemClick} // ✅ Ye line add karo
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-200"
        >
          <MdAppBlocking size={20} />
          {adminPanelOpen && <span>Coinclash</span>}
        </Link>







        <Link
          to="/hiddo/hiddoUsers"
          onClick={handleMenuItemClick} // ✅ Ye line add karo
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-200"
        >
          <FiUsers size={20} />
          {adminPanelOpen && <span>Users</span>}
        </Link>

        <Link
          to="/hiddo/hiddoSettings"
          onClick={handleMenuItemClick} // ✅ Ye line add karo
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-200"
        >
          <FiSettings size={20} />
          {adminPanelOpen && <span>Settings</span>}
        </Link>
      </nav>

      {/* Logout */}
      <div className="p-3 border-t border-green-800">
        <button
          onClick={() => {
            handleLogout();
            handleMenuItemClick(); // ✅ Logout par bhi close karo
          }}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-500/20 transition-all duration-200"
        >
          <FiLogOut size={20} className="text-red-300" />
          {adminPanelOpen && <span className="text-red-300">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default HiddoAdminPanel;