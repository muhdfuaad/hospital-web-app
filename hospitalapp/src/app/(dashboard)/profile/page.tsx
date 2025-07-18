'use client';

import React from 'react';

export default function UserProfilePage() {
  const profile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Administrator',
    phone: '+91 9876543210',
    address: '123, Admin Street, Calicut, Kerala',
    bio: 'Passionate about education and school management systems.',
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-4xl mx-auto mt-8">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
        User Profile
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
            Name
          </label>
          <p className="mt-2 text-lg text-gray-900 dark:text-gray-100">
            {profile.name}
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
            Email
          </label>
          <p className="mt-2 text-lg text-gray-900 dark:text-gray-100">
            {profile.email}
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
            Role
          </label>
          <p className="mt-2 text-lg text-gray-900 dark:text-gray-100">
            {profile.role}
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
            Phone
          </label>
          <p className="mt-2 text-lg text-gray-900 dark:text-gray-100">
            {profile.phone}
          </p>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
            Address
          </label>
          <p className="mt-2 text-lg text-gray-900 dark:text-gray-100">
            {profile.address}
          </p>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
            Bio
          </label>
          <p className="mt-2 text-gray-900 dark:text-gray-100">
            {profile.bio}
          </p>
        </div>
      </div>
    </div>
  );
}
