




import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import AdminPanel from "../components/AdminPanel";

const Dashboard = () => {
  const [adminPanelOpen, setAdminPanelOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile screen
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Mobile पर initially sidebar hidden रखें
  useEffect(() => {
    if (isMobile) {
      setAdminPanelOpen(false);
    } else {
      setAdminPanelOpen(true);
    }
  }, [isMobile]);

  // Function to close sidebar (specially for mobile)
  const closeSidebar = () => {
    if (isMobile) {
      setAdminPanelOpen(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Admin Panel - Mobile पर overlay की तरह behave करेगा */}
      {isMobile ? (
        <>
          {/* Mobile Overlay - जब sidebar open हो */}
          {adminPanelOpen && (
            <div 
              className="fixed inset-0  text-white bg-opacity-50 z-30 lg:hidden"
              onClick={closeSidebar}
            />
          )}
          
          {/* Mobile Sidebar */}

          <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-black text-white font-bold transform transition-transform duration-300 ease-in-out ${


            adminPanelOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
            <AdminPanel 
              adminPanelOpen={true} 
              onItemClick={closeSidebar} // ✅ Ye prop add kiya hai
            />
          </div>
        </>
      ) : (
        /* Desktop Sidebar - Normal behavior */

        <div className={`${adminPanelOpen ? 'w-64' : 'w-0'} bg-black text-white font-bold flex flex-col transition-all duration-300 ease-in-out shadow-lg relative`}>

          <AdminPanel 
            adminPanelOpen={adminPanelOpen} 
            onItemClick={() => {}} // ✅ Desktop par kuch nahi karna
          />
        </div>
      )}
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header 
          adminPanelOpen={adminPanelOpen}
          setAdminPanelOpen={setAdminPanelOpen}
          isMobile={isMobile}
        />
        
        <main className="flex-1 overflow-y-auto p-4 lg:p-6 bg-gray-200">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;