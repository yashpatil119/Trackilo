import { createBrowserRouter } from "react-router-dom";

import Dashboard from "./pages/adminPages/Dashboard";
import Applayout from "./appLayout/Applayout";
import Assets from "./pages/adminPages/Assets";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />, // Navbar + Sidebar + Hero + Outlet
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "assets",
        element: <Assets />,
      },
    ],
  },
]);

export default router;
