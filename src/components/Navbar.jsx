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
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <header
      className="
        sticky top-0 z-40
        h-16 w-full
        bg-surface
        border-b border-subtle
        shadow-soft
      "
    >
      <div className="flex h-full items-center justify-between px-4 lg:px-6">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-lg hover:bg-surface-2"
          >
            <Menu size={20} />
          </button>

          {/* LOGO */}
          <div className="flex items-center gap-3 select-none">
            <div
              className="
                w-9 h-9 rounded-xl
                flex items-center justify-center
                bg-primary/15 text-primary
                font-bold text-lg
                border border-primary/30
              "
            >
              T
            </div>
            <span className="hidden sm:block text-lg font-semibold text-text-main">
              Trackilo
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2">
          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="
              p-2 rounded-lg
              hover:bg-surface-2
              transition
            "
            title="Toggle theme"
          >
            {theme === "light" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* PROFILE */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen((v) => !v)}
              className="
                flex items-center gap-3
                px-2 py-1.5 rounded-lg
                hover:bg-surface-2
                transition
              "
            >
              <div
                className="
                  w-9 h-9 rounded-full
                  flex items-center justify-center
                  bg-surface-2
                  text-text-main
                  font-semibold
                  border border-dark/7
                "
              >
                CH
              </div>

              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-text-main">
                  Cornellia Hubbert
                </p>
                <p className="text-xs text-text-muted">Admin</p>
              </div>

              <ChevronDown
                size={16}
                className={`transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>

            {/* DROPDOWN */}
            {open && (
              <div
                className="
                  absolute right-0 mt-2 w-56
                  rounded-xl
                  bg-surface
                  border border-subtle
                  shadow-elev
                  overflow-hidden
                "
              >
                <div className="px-4 py-3 border-b border-subtle">
                  <p className="text-sm font-semibold text-text-main">
                    Cornellia Hubbert
                  </p>
                  <p className="text-xs text-text-muted">admin@trackilo.com</p>
                </div>

                <div className="py-1">
                  <DropdownItem icon={User} label="Profile" />
                  <DropdownItem icon={Settings} label="Settings" />
                  <DropdownItem icon={HelpCircle} label="Help & Support" />
                </div>

                <div className="border-t border-subtle">
                  <button
                    className="
                      w-full flex items-center gap-3
                      px-4 py-2.5
                      text-red-600
                      hover:bg-red-50
                      transition
                    "
                  >
                    <LogOut size={16} />
                    <span className="text-sm">Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

/* ---------------- DROPDOWN ITEM ---------------- */
function DropdownItem({ icon: Icon, label }) {
  return (
    <button
      className="
        w-full flex items-center gap-3
        px-4 py-2.5
        text-sm text-text-main
        hover:bg-surface-2
        transition
      "
    >
      <Icon size={16} />
      {label}
    </button>
  );
}
