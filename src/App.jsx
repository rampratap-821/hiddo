import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Main Project Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Reports from "./pages/Reports";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import CardOPenAdminPannel from "./pages/CardOPenAdminPannel";

// HIDDO Project Pages
import HiddoDashboard from "./HiddoPages/HiddoDashBoard";
import HiddoHome from "./HiddoPages/HiddoHome";
import HiddoUsers from "./HiddoPages/HiddoUsers";
import HiddoSettings from "./HiddoPages/HiddoSettings";
import HiddoHome2 from "./HiddoPages/HiddoHome2";

const App = () => {
  return (
    <Router>
      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Card Open Admin Panel */}
        <Route path="/cardOpenAdminPannel" element={<CardOPenAdminPannel />} />

        {/* Coin Dashboard Routes */}
        <Route path="/coin/*" element={<Dashboard />}>
          <Route index element={<Home2 />} />
          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="reports" element={<Reports />} />
        </Route>

        {/* HIDDO Dashboard Routes */}
        <Route path="/hiddo/*" element={<HiddoDashboard />}>
          <Route index element={<HiddoHome2 />} />
          <Route path="hiddoHome" element={<HiddoHome />} />
          <Route path="hiddoUsers" element={<HiddoUsers />} />
          <Route path="hiddoSettings" element={<HiddoSettings />} />
          <Route path="reports" element={<Reports />} />
        </Route>

      </Routes>
    </Router>
  );
};

export default App;
