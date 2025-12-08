import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import AdminSidebar from "../components/AdminSidebar";

export default function AppLayout() {
  return (
    <div className="app-container">
      <Navbar />

      <div className="app-body" style={{ display: "flex" }}>
        <AdminSidebar />

        <div style={{ flex: 1, padding: "20px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
