import React, { useState } from "react";
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
import UserCoinHistory from "./CoinDanielOlakunle/UserCoinHistory";
// HIDDO Project Pages
import HiddoDashboard from "./HiddoPages/HiddoDashBoard";
import HiddoHome from "./HiddoPages/HiddoHome";
import HiddoUsers from "./HiddoPages/HiddoUsers";
import HiddoSettings from "./HiddoPages/HiddoSettings";
import HiddoHome2 from "./HiddoPages/HiddoHome2";
import UpLaod_Videos from "./components/UpLaod_Videos";
import Quize_Question from "./components/Quize_Question";
import UsersList from "./components/UsersList";
import Broadcast from "./components/Broadcast";
import UserWantTOPayment from "./CoinDanielOlakunle/UserWantTOPayment";


const App = () => {
   const [usersLists, setUsersList] = useState([]);
   const [allUsers, setAllUsers] = useState([]);

    
  return (
    <Router>
      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Card Open Admin Panel */}
        <Route path="/cardOpenAdminPannel" element={<CardOPenAdminPannel />} />

        {/* Coin Dashboard Routes */}
        <Route path="/coin/*" element={<Dashboard usersLists ={usersLists} setUsersList={setUsersList} allUsers={allUsers} setAllUsers={setAllUsers}/>}>
          <Route index element={<Home2 />} />
          <Route path="home" element={<Home />} />
          <Route path="settings" element={<Settings />} />
          <Route path="reports" element={<Reports />} />
          <Route path="uploadVideos" element={<UpLaod_Videos />} />
          <Route path="quizeQuestion" element={<Quize_Question />} />
          <Route path="usersList" element={<UsersList usersLists ={usersLists}   setUsersList={ setUsersList} allUsers={allUsers} setAllUsers={setAllUsers}/>} />
          <Route path="broadCast" element={<Broadcast />} />
          <Route path="userCoinHistory" element={<UserCoinHistory />} />
          <Route path="userWantToPayment" element={<UserWantTOPayment />} />

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




// Array(5)
// 1
// : 
// {email: 'devankkaranwal@dartAdmin.dart', password: 'devankkaranwal123@admin'}
// 2
// : 
// {email: 'riponsk@dartAdmin.dart', password: 'Arshansk512@'}
// 3
// : 
// {email: 'tajmirakhatun@dartAdmin.dart', password: 'Arshanksk512@"'}
// 4
// : 
// {email: 'michele@dartAdmin.dart', password: 'michelePh@admin'}