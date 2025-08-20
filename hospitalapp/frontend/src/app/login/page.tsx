"use client";

import React, { useState } from "react";


// Define the user map type
type UserMap = {
  [key: string]: {
    [username: string]: string;
  };
};

const users: UserMap = {
  Managment: {
    Fuad: "Managment123",
    Swetha: "Managment123",
  },
  admin: {
    Syam: "admin123",
    Devi: "admin123",
  },
};

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<"Managment" | "admin">("Managment");
  const [ManagmentUsername, setManagmentUsername] = useState("");
  const [ManagmentPassword, setManagmentPassword] = useState("");
  const [adminUsername, setAdminUsername] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const username = activeTab === "Managment" ? ManagmentUsername : adminUsername;
    const password = activeTab === "Managment" ? ManagmentPassword : adminPassword;

    if (users[activeTab] && users[activeTab][username] === password) {
      localStorage.setItem("username", username);
      window.location.href = "/home";
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex min-h-screen justify-center items-center bg-gradient-to-br from-gray-100 to-blue-200 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-6">
          {(["Managment", "admin"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setError("");
              }}
              className={`px-4 py-2 rounded-full font-medium transition duration-300 ${
                activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Login
            </button>
          ))}
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={activeTab === "Managment" ? ManagmentUsername : adminUsername}
              onChange={(e) =>
                activeTab === "Managment"
                  ? setManagmentUsername(e.target.value)
                  : setAdminUsername(e.target.value)
              }
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={activeTab === "Managment" ? ManagmentPassword : adminPassword}
              onChange={(e) =>
                activeTab === "Managment"
                  ? setManagmentPassword(e.target.value)
                  : setAdminPassword(e.target.value)
              }
            />
          </div>
          <button
            onClick={handleLogin}
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </div>
      </div>
    </div>
  );
}