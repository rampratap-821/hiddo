



import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import HiddoAdminPanel from "../HiddoComponent/HiddoAdminPanel";  // ✅ FIX
import HiddoHeader from "../HiddoComponent/HiddoHeader";

const HiddoDashboard = () => {
  const [adminPanelOpen, setAdminPanelOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setAdminPanelOpen(false);
    } else {
      setAdminPanelOpen(true);
    }
  }, [isMobile]);

  const closeSidebar = () => {
    if (isMobile) {
      setAdminPanelOpen(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {isMobile ? (
        <>
          {adminPanelOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-40 z-30 lg:hidden"
              onClick={closeSidebar}
            />
          )}

          <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-pink-700 text-white font-bold transform transition-transform duration-300 ease-in-out ${
            adminPanelOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
            <HiddoAdminPanel 
              adminPanelOpen={true} 
              onItemClick={closeSidebar}  
            />
          </div>
        </>
      ) : (
        <div className={`${adminPanelOpen ? 'w-64' : 'w-20'} bg-pink-700 text-white font-bold flex flex-col transition-all duration-300 ease-in-out shadow-lg relative`}>
          <HiddoAdminPanel 
            adminPanelOpen={adminPanelOpen} 
            onItemClick={() => {}}  
          />
        </div>
      )}

      <div className="flex-1 flex flex-col min-w-0">
        <HiddoHeader 
          adminPanelOpen={adminPanelOpen}
          setAdminPanelOpen={setAdminPanelOpen}
          isMobile={isMobile}
        />
        
        <main className="flex-1 overflow-y-auto p-4 lg:p-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default HiddoDashboard;
