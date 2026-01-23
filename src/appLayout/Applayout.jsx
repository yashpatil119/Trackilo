// AppLayout.jsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import AdminSidebar from "../components/AdminSidebar";

export default function AppLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-app-bg text-text-main">
      {/* Background blur */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-24 top-32 w-[360px] h-[360px] rounded-full bg-primary/10 blur-[140px] opacity-30" />
        <div className="absolute right-0 bottom-0 w-[260px] h-[260px] rounded-full bg-primary/5 blur-[120px] opacity-20" />
      </div>

      {/* NAVBAR */}
      <Navbar toggleSidebar={() => setIsMobileSidebarOpen(true)} />

      {/* MAIN LAYOUT */}
      <div className="relative z-10 flex h-[calc(100vh-64px)]">
        {/* SIDEBAR (fixed scroll) */}
        <aside className="h-full overflow-y-auto">
          <AdminSidebar
            isSidebarCollapsed={isSidebarCollapsed}
            toggleSidebarCollapse={() => setIsSidebarCollapsed((p) => !p)}
            isSidebarOpen={isMobileSidebarOpen}
            closeMobileSidebar={() => setIsMobileSidebarOpen(false)}
          />
        </aside>

        {/* MAIN CONTENT (only this scrolls) */}
        <main className="flex-1 overflow-y-auto p-5">
          <div
            className="
              relative
              bg-app-frame
              border border-white/5
              shadow-soft
              backdrop-blur-xl
              rounded-2xl
              p-6
              min-h-full
            "
          >
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
