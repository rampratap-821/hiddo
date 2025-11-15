

import React, { useState } from "react";
import { FiBell, FiSearch, FiLogOut, FiUser, FiMenu } from "react-icons/fi";
import { PiListDashesBold, PiListDashesFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const HiddoHeader = ({ adminPanelOpen, setAdminPanelOpen, isMobile }) => {
 
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const toggleAdminPanel = () => {
    setAdminPanelOpen(!adminPanelOpen);
  };

  // Mobile के लिए explicitly close function
  const closeAdminPanel = () => {
    if (isMobile) {
      setAdminPanelOpen(false);
    }
  };

  return (
    <header className="bg-pink-700 shadow-md border-b border-green-800 sticky top-0 z-20 transition-all duration-300">
      <div className="flex items-center justify-between px-4 md:px-6 py-3">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Icon - Only show on mobile */}
          {isMobile && (
            <button
              onClick={toggleAdminPanel}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-200"
              title={adminPanelOpen ? "Close Menu" : "Open Menu"}
            >
              <FiMenu size={22} />
            </button>
          )}

          {/* Desktop Toggle Icon - Only show on desktop */}
          {!isMobile && (
            <button
              onClick={toggleAdminPanel}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-200"
              title={adminPanelOpen ? "Hide Admin Panel" : "Show Admin Panel"}
            >
              <PiListDashesBold size={22} />
            </button>
          )}

          {/* Search Box (Desktop) */}
          <div className="relative hidden sm:block">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" />
            <input
              type="text"
             
             
              placeholder="Search..."
              className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-xl 
                         text-white placeholder-white/70 focus:outline-none focus:ring-2 
                         focus:ring-white/40 w-64 transition-all duration-300"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Mobile Search Icon */}
          <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white sm:hidden">
            <FiSearch size={20} />
          </button>

          {/* Notification Bell */}
          <button className="relative p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors duration-200">
            <FiBell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>



          

          {/* User Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-200"
            >
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <FiUser size={16} />
              </div>
              <span className="hidden md:block text-sm font-medium">Admin</span>
            </button>

            {/* Dropdown Menu */}
            {showUserMenu && (
              <div className="absolute right-0 top-12 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-30 animate-fadeIn">
                <button 
                  onClick={() => {
                    // Profile click par mobile sidebar close ho
                    closeAdminPanel();
                    setShowUserMenu(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150"
                >
                  Profile
                </button>    
                
                <button 
                  onClick={() => {
                    // Settings click par mobile sidebar close ho
                    closeAdminPanel();
                    setShowUserMenu(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text- hover:bg-gray-50 transition-colors duration-150"
                >
                  Settings
                </button>
                <div className="border-t border-gray-200 my-1"></div>
                <button
                  onClick={() => {
                    handleLogout();
                    closeAdminPanel(); // Logout par bhi close karo
                    setShowUserMenu(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-150 flex items-center gap-2"
                >
                  <FiLogOut size={14} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="px-4 pb-3 sm:hidden">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/70
                       focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-300"
          />
        </div>
      </div>
    </header>
  );
};

export default HiddoHeader;
