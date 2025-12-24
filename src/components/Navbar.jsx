// Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import {
  Menu,
  ChevronDown,
  User,
  Settings,
  HelpCircle,
  LogOut,
  Sun,
  Moon,
} from "lucide-react";

import { applyTheme, getInitialTheme } from "../lib/theme";

export default function Navbar({ toggleSidebar }) {
  /* ---------------- THEME ---------------- */
  const [theme, setTheme] = useState(() => getInitialTheme());

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  /* ---------------- PROFILE DROPDOWN ---------------- */
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav
      className="
        sticky top-0 z-40 h-16 w-full
        glass shadow-soft
        border-b border-white/10
      "
    >
      <div className="flex h-full items-center justify-between px-4 lg:px-6">

        {/* ---------------- LEFT ---------------- */}
        <div className="flex items-center gap-4">

          {/* Mobile toggle */}
          <button
            onClick={toggleSidebar}
            className="
              lg:hidden p-2 rounded-lg
              text-text-muted hover:text-text-main
              hover:bg-white/5 transition
            "
          >
            <Menu size={20} />
          </button>

          {/* Logo */}
          <div className="flex items-center gap-3 select-none">
            <div className="relative">
              <div
                className="
                  w-9 h-9 rounded-xl flex items-center justify-center
                  bg-gradient-to-br from-primary to-primary-600
                  text-black font-bold text-lg
                  shadow-elev
                "
              >
                T
              </div>

              {/* Accent dot */}
              <span className="
                absolute -top-1 -right-1 w-2.5 h-2.5
                rounded-full bg-orange-400
                shadow-md
              " />
            </div>

            <span className="hidden sm:block font-semibold text-lg tracking-tight text-text-main">
              Trackilo
            </span>
          </div>
        </div>

        {/* ---------------- RIGHT ---------------- */}
        <div className="flex items-center gap-2">

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="
              p-2 rounded-lg
              text-text-muted hover:text-text-main
              hover:bg-white/5 transition
            "
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Profile */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsProfileOpen((v) => !v)}
              className="
                flex items-center gap-3 px-3 py-2 rounded-lg
                hover:bg-white/5 transition
              "
            >
              <div
                className="
                  w-9 h-9 rounded-full
                  bg-gradient-to-br from-primary to-primary-600
                  flex items-center justify-center
                  text-black font-semibold
                  shadow-soft
                "
              >
                CH
              </div>

              <div className="hidden md:block text-left leading-tight">
                <p className="text-sm font-medium text-text-main">
                  Cornellia Hubbert
                </p>
                <p className="text-xs text-text-muted">Admin</p>
              </div>

              <ChevronDown
                size={16}
                className={`text-text-muted transition-transform ${
                  isProfileOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown */}
            {isProfileOpen && (
              <div
                className="
                  absolute right-0 mt-2 w-56 overflow-hidden
                  rounded-xl glass shadow-elev
                  border border-white/10
                "
              >
                <div className="p-4 border-b border-white/10">
                  <p className="text-sm font-semibold text-text-main">
                    Cornellia Hubbert
                  </p>
                  <p className="text-xs text-text-muted">
                    admin@trackilo.com
                  </p>
                </div>

                <div className="py-2">
                  <DropdownItem icon={User} label="Profile" />
                  <DropdownItem icon={Settings} label="Settings" />
                  <DropdownItem icon={HelpCircle} label="Help & Support" />
                </div>

                <div className="border-t border-white/10 py-2">
                  <button
                    className="
                      w-full flex items-center gap-3 px-4 py-2.5
                      text-red-400 hover:text-red-300
                      hover:bg-red-500/10 transition
                    "
                  >
                    <LogOut size={17} />
                    <span className="text-sm">Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </nav>
  );
}

/* ---------------- Dropdown Item ---------------- */
function DropdownItem({ icon: Icon, label }) {
  return (
    <button
      className="
        w-full flex items-center gap-3 px-4 py-2.5
        text-text-muted hover:text-text-main
        hover:bg-white/5 transition
      "
    >
      <Icon size={18} />
      <span className="text-sm">{label}</span>
    </button>
  );
}
