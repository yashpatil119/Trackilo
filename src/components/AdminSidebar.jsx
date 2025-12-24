// AdminSidebar.jsx (Premium + Theme-Aware)
import React from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Package,
  Layers,
  Wrench,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import clsx from "clsx";

export default function AdminSidebar({
  isSidebarOpen,
  isSidebarCollapsed,
  toggleSidebarCollapse,
  closeMobileSidebar,
}) {
  const sections = [
    {
      title: "OVERVIEW",
      items: [{ icon: Home, label: "Dashboard", path: "/" }],
    },
    {
      title: "ASSET MANAGEMENT",
      items: [
        { icon: Package, label: "Assets", path: "/assets" },
        { icon: Layers, label: "Components", path: "/components" },
        { icon: Wrench, label: "Maintenance", path: "/maintenance" },
      ],
    },
    {
      title: "CONFIGURATION",
      items: [
        { icon: Layers, label: "Asset Types", path: "/asset-types" },
        { icon: Package, label: "Brands", path: "/brands" },
        { icon: Wrench, label: "Suppliers", path: "/suppliers" },
      ],
    },
    {
      title: "MOVEMENT & TRACKING",
      items: [
        { icon: Layers, label: "Asset Movement", path: "/asset-movement" },
        { icon: Layers, label: "Component Movement", path: "/component-movement" },
        { icon: Layers, label: "Locations", path: "/locations" },
      ],
    },
    {
      title: "HUMAN RESOURCES",
      items: [
        { icon: Layers, label: "Employees", path: "/employees" },
        { icon: Layers, label: "Departments", path: "/departments" },
      ],
    },
    {
      title: "SYSTEM",
      items: [
        { icon: Settings, label: "Settings", path: "/settings" },
        { icon: HelpCircle, label: "Help", path: "/help" },
      ],
    },
  ];

  const sidebarWidth = isSidebarCollapsed ? "w-[78px]" : "w-[240px]";

  return (
    <>
      {/* Mobile backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={closeMobileSidebar}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={clsx(
          `
          fixed top-16 left-0 z-40 
          h-[calc(100vh-64px)] 
          overflow-hidden 
          transition-all duration-300 ease-out
          backdrop-blur-xl 
          border-r card-border
          bg-surface/80 
          shadow-soft
          noise-overlay
        `,
          "lg:static lg:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          sidebarWidth
        )}
      >

        {/* Theme-aware bloom glows */}
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bloom-ring"></div>
        <div className="absolute -top-20 left-6 w-64 h-64 bloom-ring opacity-40"></div>

        {/* CONTENT */}
        <div className="relative z-10 h-full flex flex-col">

          {/* Scroll area */}
          <div className="flex-1 overflow-y-auto scrollbar-hide p-4 flex flex-col gap-6">
            {sections.map((section, index) => (
              <div key={index} className="flex flex-col gap-2">

                {/* TITLE */}
                <span
                  className={clsx(
                    "text-[10px] font-semibold tracking-wide text-text-muted/70 transition-all",
                    isSidebarCollapsed && "opacity-0 w-0 overflow-hidden"
                  )}
                >
                  {section.title}
                </span>

                {/* ITEMS */}
                <div className="flex flex-col gap-1">
                  {section.items.map((item, idx) => (
                    <SidebarItem
                      key={idx}
                      item={item}
                      collapsed={isSidebarCollapsed}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* COLLAPSE BUTTON */}
          <div className="p-4 border-t border-white/5">
            <button
              onClick={toggleSidebarCollapse}
              className="
                hidden lg:flex items-center justify-center w-full p-2
                rounded-xl hover:bg-white/5 text-text-muted
                transition-all duration-200
              "
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 flex items-center justify-center rounded-lg bg-white/5 hover:bg-primary/20 transition-colors">
                  {isSidebarCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                </div>

                {!isSidebarCollapsed && (
                  <span className="text-sm font-medium tracking-wide">Collapse</span>
                )}
              </div>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

/* -------------------------
   ITEM
------------------------- */
function SidebarItem({ item, collapsed }) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        clsx(
          `
          sidebar-item group relative flex items-center gap-3 p-3 rounded-xl
          transition-all duration-200 select-none
        `,
          collapsed ? "justify-center" : "justify-start",
          isActive && "sidebar-item-active"
        )
      }
    >
      <Icon size={22} className="sidebar-icon" />

      <span
        className={clsx(
          "sidebar-label whitespace-nowrap text-sm font-medium transition-all duration-200",
          collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
        )}
      >
        {item.label}
      </span>

      {/* Tooltip (unchanged) */}
      {collapsed && (
        <div
          className="
            absolute left-full top-1/2 -translate-y-1/2 ml-3
            px-3 py-1.5 rounded-lg bg-surface text-text-main text-xs 
            opacity-0 invisible group-hover:opacity-100 group-hover:visible
            transition-all duration-200 shadow-lg border card-border z-[20]
          "
        >
          {item.label}
          <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-surface" />
        </div>
      )}
    </NavLink>
  );
}
