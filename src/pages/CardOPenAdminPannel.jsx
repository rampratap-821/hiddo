import React from 'react'
import { useNavigate } from "react-router-dom";
import Coinclash from "../assets/image/coinclash-removebg-preview.png"
import Hiddo from "../assets/image/hiddo-removebg-preview.png"

const CardOPenAdminPannel = () => {

  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-black via-zinc-900 to-black min-h-screen 
                    flex flex-col justify-center items-center gap-10 p-6">

      {/* ✨ Attractive Main Title */}
      <h1 className="text-4xl sm:text-5xl font-bold text-transparent 
                     bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 
                     drop-shadow-[0_0_20px_rgba(0,255,200,0.5)]
                     text-center tracking-wide">
        Select Your Admin Panel
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-10">

        {/* Card 1 */}
        <div 
          onClick={() => navigate("/coin")}
          className="cursor-pointer group relative rounded-3xl p-5 bg-white/5 
                      backdrop-blur-xl shadow-xl border border-white/10 
                      transition-all duration-300 hover:scale-[1.06] 
                      hover:shadow-[0_0_25px_5px_rgba(0,255,120,0.5)]
                      w-[90%] sm:w-[320px] md:w-[350px] lg:w-[380px] 
                      flex flex-col justify-center items-center">

          {/* Small Title on Card */}
          <p className="text-green-300 text-xl font-bold mb-3 tracking-wide drop-shadow">
            COINCLASH PANEL
          </p>

          <img 
            src={Coinclash} 
            className="w-[180px] sm:w-[230px] md:w-[260px] lg:w-[300px] 
                       transition-all duration-300 group-hover:scale-110" 
          />
        </div>

        {/* Card 2 */}
        <div 
          onClick={() => navigate("/hiddo")}
          className="cursor-pointer group relative rounded-3xl p-5 bg-white/5 
                      backdrop-blur-xl shadow-xl border border-white/10 
                      transition-all duration-300 hover:scale-[1.06] 
                      hover:shadow-[0_0_25px_5px_rgba(255,0,120,0.5)]
                      w-[90%] sm:w-[320px] md:w-[350px] lg:w-[380px] 
                      flex flex-col justify-center items-center">

          {/* Small Title on Card */}
          <p className="text-pink-300 text-xl font-bold mb-3 tracking-wide drop-shadow">
            HIDDO PANEL
          </p>

          <img 
            src={Hiddo} 
            className="w-[180px] sm:w-[230px] md:w-[260px] lg:w-[300px] 
                       transition-all duration-300 group-hover:scale-110" 
          />
        </div>

      </div>
    </div>
  )
}

export default CardOPenAdminPannel
