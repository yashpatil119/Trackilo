import { createBrowserRouter } from "react-router-dom";

import Dashboard from "./pages/adminPages/Dashboard";
import Applayout from "./appLayout/Applayout";
import Assets from "./pages/adminPages/Assets";
import { Component } from "lucide-react";
import Components from "./pages/adminPages/Components";
import Maintenance from "./pages/adminPages/Maintenance";
import AssetsTypes from "./pages/adminPages/AssetsTypes";
import { Brands } from "./pages/adminPages/Brands"; 
import Suppliers from "./pages/adminPages/Suppliers";
import AssetMovement from "./pages/adminPages/AssetMovement";
import ComponentMovement from "./pages/adminPages/ComponentMovement";
import Locations from "./pages/adminPages/Locations";
import Employees from "./pages/adminPages/Employees";
import { Departments } from "./pages/adminPages/Departments";

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
      {
        path: "components",
        element: <Components />,
      },
      {
        path : "maintenance",
        element : <Maintenance />
      },
      {
        path : "asset-types",
        element : <AssetsTypes />
      },
      {
        path : "brands",
        element : <Brands />
      },
      {
        path : "suppliers",
        element : <Suppliers />
      },
      {
        path : "asset-movement",
        element : <AssetMovement />
      },
      {
        path : "component-movement",
        element : <ComponentMovement />
      },
      {
        path : "locations",
        element : <Locations />
      },
      {
        path : "employees",
        element : <Employees />
      },
      {
        path : "departments",
        element : <Departments />
      },
      

    ],
  },
]);

export default router;
