
import React, { useState } from "react";
import { FiHome, FiUsers, FiSettings, FiLogOut } from "react-icons/fi";
import { useNavigate, Link } from "react-router-dom";
import DarTechnology from "../assets/image/image-removebg-preview.png";
import { MdAppBlocking } from "react-icons/md";
import { FaBell, FaHome } from "react-icons/fa";
import { TiStopwatch } from "react-icons/ti";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiSealQuestionFill, PiVideoFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa6";


const AdminPanel = ({ adminPanelOpen, onItemClick }) => {
  const [QuickAction, setQuickAction] = useState(false)
  const [Daniel, setDaniel] = useState(false)
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
      <div className="flex items-center justify-between p-4 border-b border-green-800">
        <div className="flex items-center gap-3">
          <img
            src={DarTechnology}
            alt="Logo"
            className={`transition-all duration-300 ${adminPanelOpen ? "w-10 h-10" : "w-8 h-8"
              }`}
          />
          {adminPanelOpen && (
            <h1 className="text-lg font-semibold tracking-wide">
              Coinclash
            </h1>
          )}
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-3 space-y-2">

        <Link
          to="/coin/Home"
          onClick={handleMenuItemClick} // ✅ Ye line add karo
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-200"
        >
          <FaHome size={20} />
          {adminPanelOpen && <span> Admin Dashboard</span>}
        </Link>








        <div className="pb-3">
          {/* Quick Action Header */}
          <div
            className="flex justify-between items-center px-3 cursor-pointer select-none"
            onClick={() => setQuickAction(!QuickAction)}
          >
            <div >
              
              {adminPanelOpen &&   <div className="flex items-center gap-3"> <TiStopwatch size={20} /> <span>Quick Action</span> </div>}
            </div>


            <IoMdArrowDropdown
              className={`transition-transform duration-1000 
        ${QuickAction ? "rotate-180" : "rotate-0"}`}
              size={22}
            />
          </div>


          <div
            className={`
      overflow-hidden transition-all duration-500 ease-in-out 
      ${QuickAction ? " opacity-96 mt-2" : "max-h-0 opacity-0"}
    `}
          >
            <div className="   space-y-1 transform transition-all duration-500 px-4">

              <div className="grid grid-cols-2 gap-2 text-center font-bold">
                <div className=" px-3 py-2 rounded hover:bg-orange-900 transition-all bg-orange-700">
                  <Link
                    to={"/coin/uploadVideos"}
                    onClick={handleMenuItemClick}
                    className="flex items-center gap-3  w-full " style={{ fontSize: 10 }}
                  >
                    <PiVideoFill size={20} />
                    {adminPanelOpen && <span>Upload Video</span>}
                  </Link>
                </div>


                <div className="px-3 py-2 rounded hover:bg-teal-900 transition-all bg-teal-700">
                  <Link
                    to={"/coin/quizeQuestion"}
                    onClick={handleMenuItemClick}
                    className="flex items-center gap-3 " style={{ fontSize: 10 }}
                  >
                    <PiSealQuestionFill size={20} />
                    {adminPanelOpen && <span>Quiz Questions</span>}
                  </Link>
                </div>

                <div className="px-3 py-3 rounded hover:bg-green-900 transition-all bg-green-700 ">
                  <Link
                    to={"/coin/usersList"}
                    onClick={handleMenuItemClick}
                    className="flex items-center gap-3 " style={{ fontSize: 10 }}
                  >
                    <FaUser size={20} />
                    {adminPanelOpen && <span>User List</span>}
                  </Link>
                </div>


                <div className="px-3 py-3 rounded hover:bg-pink-900 transition-all bg-pink-700">
                  <Link
                    to={"/coin/broadCast"}
                    onClick={handleMenuItemClick}
                    className="flex items-center gap-3 " style={{ fontSize: 10 }}
                  >
                    <FaBell size={20} />
                    {adminPanelOpen && <span>Broadcast</span>}
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </div>











        <div className="pb-3  ">
          {/* Daniel  */}
          <div
            className="flex justify-between items-center px-1  cursor-pointer select-none hover:white/20"
            onClick={() => setDaniel(!Daniel)}
          >
            <div className="flex items-center gap-3">
             
              {adminPanelOpen &&   <div> <span className="bg-blue-700 p-1 pr-1 rounded-full px-2 ml-1 mr-2"> D </span><span>Daniel Olakunle</span> </div>}
            </div>


            <IoMdArrowDropdown
              className={`transition-transform duration-1000 mr-2
        ${Daniel ? "rotate-180" : "rotate-0"}`}
              size={22}
            />
          </div>


          <div
            className={`
      overflow-hidden transition-all duration-500 ease-in-out 
      ${Daniel ? " opacity-96 mt-2 bg-white p-4 rounded text-center" : "max-h-0 opacity-0"}
    `}
          >
            <div className="   space-y-1 transform transition-all duration-500 px-4">

              <h1 className="text-center text-yellow-600 font-bold pb-2">🪙🪙Coins Record</h1>

              <h1 className="bg-red-700 px-2 py-2 rounded hover:bg-green-800 "onClick={handleMenuItemClick}>
                < button  onClick={()=>navigate("/coin/userCoinHistory")} >User Coins HIstory</button>
              </h1>
              <h1 className="bg-red-700 px-2 py-2 rounded  hover:bg-green-800" onClick={handleMenuItemClick}>
                < button onClick={()=>navigate("/coin/userWantToPayment")}>User want to payment</button>
              </h1>


            </div>
          </div>
        </div>










        <Link
          to="/hiddo"
          onClick={handleMenuItemClick} // ✅ Ye line add karo
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-200"
        >
          <MdAppBlocking size={20} />
          {adminPanelOpen && <span>Hiddo</span>}
        </Link>



{/* 
        <Link
          to="/coin/users"
          onClick={handleMenuItemClick} // ✅ Ye line add karo
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-200"
        >
          <FiUsers size={20} />
          {adminPanelOpen && <span>Users</span>}
        </Link> */}

        <Link
          to="/coin/settings"
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
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/20 transition-all duration-200"
        >

          <FiLogOut size={20} className="text-white" />
          {adminPanelOpen && <span className="text-white">Logout</span>}


        </button>
      </div>
    </div>
  );
};

export default AdminPanel;