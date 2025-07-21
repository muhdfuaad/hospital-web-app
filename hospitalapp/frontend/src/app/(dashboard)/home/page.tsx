// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import {
  FaProcedures,
  FaUserMd,
  FaUserInjured,
  FaHandsHelping,
  FaClock,
  FaHospital,
} from "react-icons/fa";

interface DashboardStats {
  totalDoctors: number;
  totalNurses: number;
  totalPatients: number;
  totalVolunteers: number;
}

interface ActivityItem {
  entity: string;
  action: string;
  date: string;
}

function StatCard({ title, value, icon }: { title: string; value: string | number; icon: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-br from-green-500 to-teal-600 text-white rounded-xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="text-2xl">{icon}</div>
      </div>
      <p className="text-4xl font-extrabold">{value}</p>
    </div>
  );
}

export default function HospitalDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalDoctors: 0,
    totalNurses: 0,
    totalPatients: 0,
    totalVolunteers: 0
  });

  const [recentActivities, setRecentActivities] = useState<ActivityItem[]>([]);

  useEffect(() => {
    // simulate loading real stats
    setStats({
      totalDoctors: 67,
      totalNurses: 142,
      totalPatients: 320,
      totalVolunteers: 45
    });

    setRecentActivities([
      { entity: "Dr. Smith", action: "New shift registered", date: "2025-06-23" },
      { entity: "Patient #4521", action: "Admitted to Ward B", date: "2025-06-23" },
      { entity: "Nurse Jackson", action: "Completed training", date: "2025-06-22" },
      { entity: "Volunteer Anna", action: "Started orientation", date: "2025-06-21" },
    ]);
  }, []);

  return (
    <div className="flex min-h-screen grid-background">

      {/* Main Content */}
      <main className="flex-1 p-8 space-y-8">
        <div className="bg-yellow-100 text-yellow-800 px-4 py-3 rounded-md shadow">
          📢 Welcome! Here's the latest hospital stats and activity.
        </div>

        {/* Dashboard Header */}
        <h1 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100">
          Hospital Overview
        </h1>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard title="Doctors Registered" value={stats.totalDoctors} icon={<FaUserMd />} />
          <StatCard title="Nurses Registered" value={stats.totalNurses} icon={<FaHandsHelping />} />
          <StatCard title="Patients Admitted" value={stats.totalPatients} icon={<FaUserInjured />} />
          <StatCard title="Volunteers Active" value={stats.totalVolunteers} icon={<FaHospital />} />
        </div>

        {/* Recent Registry Activity */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Recent Registry Activity
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left table-auto">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-2">Entity</th>
                  <th className="px-4 py-2">Action</th>
                  <th className="px-4 py-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentActivities.map((act, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-700"}>
                    <td className="px-4 py-2">{act.entity}</td>
                    <td className="px-4 py-2">{act.action}</td>
                    <td className="px-4 py-2">{act.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
