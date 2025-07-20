'use client';

import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaGlobe, FaBell, FaSave } from 'react-icons/fa';

export default function SettingsPage() {
  const [username, setUsername] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [language, setLanguage] = useState('english');
  const [notifications, setNotifications] = useState(true);

  const handleSave = () => {
    const settings = { username, email, language, notifications };
    console.log('Saved settings:', settings);
    alert('Settings saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <div className="bg-white dark:bg-gray-900 w-full max-w-2xl rounded-3xl shadow-2xl p-8 sm:p-10 transition-all duration-300">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-8">
          ⚙️ User Settings
        </h2>

        <div className="space-y-6">
          {/* Username */}
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-600 dark:text-gray-300 mb-1">
              Username
            </label>
            <div className="flex items-center border dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 px-3 py-2">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-transparent text-gray-800 dark:text-white focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-600 dark:text-gray-300 mb-1">
              Email Address
            </label>
            <div className="flex items-center border dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 px-3 py-2">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent text-gray-800 dark:text-white focus:outline-none"
              />
            </div>
          </div>

          {/* Language */}
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-600 dark:text-gray-300 mb-1">
              Preferred Language
            </label>
            <div className="flex items-center border dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 px-3 py-2">
              <FaGlobe className="text-gray-400 mr-2" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full bg-transparent text-gray-800 dark:text-white focus:outline-none"
              >
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
                <option value="malayalam">Malayalam</option>
              </select>
            </div>
          </div>

          {/* Notifications */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-300">
              <FaBell className="text-gray-400" />
              Enable Notifications
            </label>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
              />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-indigo-600 transition-all"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-full transition-transform"></div>
            </label>
          </div>

          {/* Save Button */}
          <div className="pt-6 text-center">
            <button
              onClick={handleSave}
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition shadow-lg"
            >
              <FaSave />
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
