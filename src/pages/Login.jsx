






import React, { useState, useEffect, useCallback } from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from 'jwt-decode'; // ✅ Fixed import name
import { useNavigate } from "react-router-dom";
import coin from '../assets/image/image-removebg-preview.png'

// IMPORT YOUR FIREBASE FUNCTIONS
import { fetchTotalUsersLists, fetchAdminEmails, updateUserCredByEmail } from "../Model/firebaseHelpers";
import { SignInModel } from "../Model/SignInModel";
import { signInClickCash } from "../Model/authService";
import SignUpModel from "../Model/SignUpModel";

const Login = () => {
  console.log("ram",fetchTotalUsersLists)
  console.log("ramu",fetchAdminEmails())

  console.log("rampala",updateUserCredByEmail())

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usersList, setUsersList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const loadUsers = useCallback(async () => {
    const { users, error } = await fetchTotalUsersLists();

    if (!error) {
      const sorted = users.sort((a, b) =>
        a.fullName?.toLowerCase().localeCompare(b.fullName?.toLowerCase())
      );
      setUsersList(sorted);
      console.log("Users Loaded:", sorted.length);
    }
  }, []);

  const generateReferralCode = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let str = "";
    for (let i = 0; i < 6; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return str;
  };

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const fetchAdminEmailsAndCheck = async (email, password) => {
    try {
      const response = await fetchAdminEmails();

      if (response && Array.isArray(response)) {
        const cleanList = response.filter(
          (item) => item && item.email && item.password
        );

        const found = cleanList.find(
          (item) =>
            item.email.toLowerCase() === email.toLowerCase() &&
            item.password === password
        );

        return !!found;
      }
      return false;
    } catch (error) {
      console.error("Admin check error:", error);
      return false;
    }
  };

  const handleLogin = async () => {
    if (!email) return alert("Enter Email");
    if (!password) return alert("Enter Password");

    setLoading(true);

    try {
      const isAdmin = await fetchAdminEmailsAndCheck(email, password);

      if (isAdmin) {
        localStorage.setItem("admin", "admin");
        localStorage.setItem("isSignIn", "true");
        localStorage.setItem("UserEmail", email.toLowerCase());
        setLoading(false);
        navigate("/cardOpenAdminPannel");
        return;
      }

      const model = new SignInModel(email, password);
      const { success, message } = await signInClickCash(model);

      alert(message);

      if (success) {
        localStorage.setItem("isSignIn", "true");
        localStorage.setItem("UserEmail", email.toLowerCase());
        localStorage.setItem("userPassword", password);

        // Fire and forget - don't wait for this
        updateUserCredByEmail(email, password)
          .then(() => console.log("Credentials updated"))
          .catch(err => console.error("Update error:", err));

        navigate("/cardOpenAdminPannel");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async (signUpModel, email) => {
    try {
      // This should be your actual signup API call
      // For now, we'll simulate success
      console.log("Signing up:", signUpModel);

      localStorage.setItem("isGoogleSignIn", "true");
      localStorage.setItem("isSignIn", "true");
      localStorage.setItem("UserEmail", email);

      navigate("/cardOpenAdminPannel");
    } catch (error) {
      console.error("Google signup error:", error);
      alert("Signup failed!");
    }
  };

  return (
    <div className="min-h-screen bg-green-700 flex flex-col items-center justify-center p-6">
      <div className=" p-6 rounded-2xl shadow-2xl w-full max-w-md ">
        <div className="flex justify-center">
          <img
            src={coin}
            alt="logo"
            className="w-40 h-40 mb-5 object-contain"
          />
        </div>

        <h2 className="text-xl text-white font-bold mb-4 text-center text-green-700">
          Login To Admin Pannel
        </h2>

        {/* EMAIL */}
        <label className="font-semibold text-gray-900">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-xl px-3 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD */}
        <label className="font-semibold text-gray-900">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full border border-gray-300 rounded-xl px-3 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

    
        {/* LOGIN BUTTON */}
        <button
          disabled={loading || !email || !password}
          onClick={handleLogin}
          className={`w-full py-3 rounded-xl font-bold text-white transition-colors my-4 ${loading || !email || !password
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-900"
            }`}
        >
          {loading ? (
            <div className="flex items-center justify-center ">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Signing In...
            </div>
          ) : (
            "Sign In"
          )}
        </button>


        
      </div>
    </div>
  );


};

export default Login;