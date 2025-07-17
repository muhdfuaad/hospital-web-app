"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

type MenuItem = {
  id?: string;
  label: string;
  href?: string;
  isDropdown?: boolean;
  children?: { id: string; label: string; href?: string }[];
  icon?: string;
};

interface ActivityItem {
  user: string;
  action: string;
  date: string;
}

const menuItems: MenuItem[] = [
  {
    id: "dashboard",
    label: "DASHBOARD",
    href: "/",
    icon: "🏠"
  },
  {
    id: "registrations",
    label: "REGISTRATIONS",
    isDropdown: true,
    icon: "📝",
    children: [
      {
        id: "patient-assignment",
        label: "Patients Assignment",
        href: "/viewAssignments"
      },
      {
        id: "patient-registration",
        label: "Patients Registration",
        href: "/viewpatients"
      },
      {
        id: "doctor-registration",
        label: "Doctors Registration",
        href: "/viewdoctor"
      },
      {
        id: "volunteer-registration",
        label: "Volunteers Registration",
        href: "/viewvolunteers"
      },
      {
        id: "nurse-registration",
        label: "Nurse Registration",
        href: "/viewnurses"
      }
    ],
  },
  {
    id: "masters",
    label: "MASTERS",
    isDropdown: true,
    icon: "📊",
    children: [
      {
        id: "view-districts",
        label: "DISTRICTS",
        href: "/location/Districts"
      },
      {
        id: "view-panchayaths",
        label: "PANCHAYATHS",
        href: "/location/Panchayaths"
      },
    ],
  },
  {
    id: "settings",
    label: "SETTINGS",
    href: "/settings",
    icon: "⚙️"
  },
];

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('dashboard');
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);


  const [dashboardStats, setDashboardStats] = useState({
    totalUsers: 'Loading...',
    activeSessions: 'Loading...',
    revenue: 'Loading...',
  });
  const [recentActivity, setRecentActivity] = useState<ActivityItem[]>([]);

  const handleLogout = () => {
    console.log("Logging out...");
    if (typeof window !== 'undefined') {
      localStorage.removeItem("authToken");
    }
    router.push("/login");
  };

  const handleNotificationClick = () => {
    console.log("Notification button clicked!");
    setIsProfileDropdownOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const toggleDropdown = (itemId: string) => {
    setOpenDropdowns(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleMenuClick = (item: MenuItem, childItem?: { id: string; label: string; href?: string }) => {
    const targetId = childItem?.id || item.id!;
    const targetHref = childItem?.href || item.href;

    setActiveSection(targetId);

    if (targetHref) {
      router.push(targetHref);
    }

    // Close sidebar on mobile after navigation
    setIsSidebarOpen(false);
    setIsProfileDropdownOpen(false);
  };

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('sidebar');
      const hamburger = document.getElementById('hamburger-btn');

      if (isSidebarOpen && sidebar && !sidebar.contains(event.target as Node) &&
        hamburger && !hamburger.contains(event.target as Node)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        ></div>
      )}

      {/* Sidebar */}
      <aside
        id="sidebar"
        className={`fixed top-0 left-0 w-72 h-screen flex flex-col justify-between bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 shadow-2xl z-50
  transform transition-transform duration-300 ease-in-out
  ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
  md:relative md:translate-x-0`}
      >
        {/* Sidebar Header */}
        <div className="p-6 text-center border-b border-indigo-700/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl">🏥</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">HealthCare</h2>
                <p className="text-xs text-indigo-200">Admin Panel</p>
              </div>
            </div>
            {/* Close button for mobile */}
            <button
              className="md:hidden text-white hover:text-gray-300 focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={toggleSidebar}
              aria-label="Close sidebar"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="overflow-y-auto px-4 py-6 space-y-2 flex-1">
          {menuItems.map((item) => (
            <div key={item.id} className="space-y-1">
              {item.isDropdown && item.children ? (
                // Dropdown Menu Item
                <div>
                  <button
                    onClick={() => toggleDropdown(item.id!)}
                    className={`w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium rounded-xl transition-all duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 ${openDropdowns.includes(item.id!)
                      ? 'bg-white/15 text-white'
                      : 'text-indigo-100 hover:text-white'
                      }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{item.icon}</span>
                      <span className="font-semibold tracking-wide">{item.label}</span>
                    </div>
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 ${openDropdowns.includes(item.id!) ? 'rotate-180' : ''
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>

                  {/* Dropdown Content */}
                  <div className={`overflow-hidden transition-all duration-300 ${openDropdowns.includes(item.id!) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="pl-4 py-2 space-y-1">
                      {item.children.map((child) => (
                        <button
                          key={child.id}
                          onClick={() => handleMenuClick(item, child)}
                          className={`w-full text-left px-4 py-2.5 text-sm rounded-lg transition-all duration-200 flex items-center space-x-3 ${activeSection === child.id
                            ? 'bg-white text-indigo-900 font-semibold shadow-lg'
                            : 'text-indigo-200 hover:text-white hover:bg-white/10'
                            }`}
                        >
                          <span className="w-2 h-2 rounded-full bg-current opacity-60"></span>
                          <span>{child.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                // Regular Menu Item
                <button
                  onClick={() => handleMenuClick(item)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/20 ${activeSection === item.id
                    ? 'bg-white text-indigo-900 shadow-lg font-semibold'
                    : 'text-indigo-100 hover:text-white hover:bg-white/10'
                    }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-semibold tracking-wide">{item.label}</span>
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-indigo-700/50 mt-auto">
          <div className="flex items-center space-x-3 px-4 py-3 bg-white/10 rounded-xl">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-sm font-bold text-indigo-900">A</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Admin User</p>
              <p className="text-xs text-indigo-200 truncate">admin@healthcare.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-900 h-screen overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between px-4 py-4 md:px-8 md:py-6 bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700 z-10">
          <div className="flex items-center space-x-4">
            {/* Hamburger menu for mobile */}
            <button
              id="hamburger-btn"
              className="md:hidden text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              onClick={toggleSidebar}
              aria-label="Open sidebar"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>

            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
                {menuItems.find(item => item.id === activeSection)?.label ||
                  menuItems.find(item => item.children?.some(child => child.id === activeSection))?.children?.find(child => child.id === activeSection)?.label ||
                  'Dashboard'}
              </h1>
            </div>
          </div>

          <div className="relative flex items-center space-x-4">
            {/* Notification Bell */}
            <button
              className="relative p-3 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
              aria-label="Notifications"
              onClick={handleNotificationClick}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
              </svg>
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full shadow-lg">
                3
              </span>
            </button>

            {/* User Profile Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-2 p-3 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                onClick={toggleProfileDropdown}
                aria-label="User Profile"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </button>

              {/* Profile Dropdown Menu */}
              {isProfileDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white dark:bg-gray-700 rounded-xl shadow-xl border border-gray-200 dark:border-gray-600 py-2 z-20">
                  <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Admin User</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">admin@healthcare.com</p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveSection('profile');
                      router.push('/profile');
                      setIsProfileDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    <span>User Profile</span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleLogout();
                    }}
                    className="w-full text-left px-4 py-3 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                    </svg>
                    <span>Log Out</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}