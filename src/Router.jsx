import { createBrowserRouter } from "react-router-dom";

import Dashboard from "./pages/adminPages/Dashboard";
import Applayout from "./appLayout/Applayout";
import Assets from "./pages/adminPages/Assets";
import Components from "./pages/adminPages/Components";
import Maintenance from "./pages/adminPages/Maintenance";
import AssetsTypes from "./pages/adminPages/AssetsTypes";
import Brands from "./pages/adminPages/Brands";
import Suppliers from "./pages/adminPages/Suppliers";
import AssetMovement from "./pages/adminPages/AssetMovement";
import ComponentMovement from "./pages/adminPages/ComponentMovement";
import Locations from "./pages/adminPages/Locations";
import Employees from "./pages/adminPages/Employees";
import Departments from "./pages/adminPages/Departments";
import Reports from "./pages/adminPages/Reports";
import Alert from "./pages/adminPages/Alert";
import QRcode from "./pages/adminPages/QRcode";
import UserManagement from "./pages/adminPages/UserManagement";
import RoleandPermission from "./pages/adminPages/RoleandPermission";
import AssetStatus from "./pages/adminPages/AssetStatus";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
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
        path: "maintenance",
        element: <Maintenance />,
      },
      {
        path: "asset-types",
        element: <AssetsTypes />,
      },
      {
        path: "asset-status",
        element: <AssetStatus />,
      },
      {
        path: "asset-types",
        element: <AssetsTypes />,
      },
      {
        path: "brands",
        element: <Brands />,
      },
      {
        path: "suppliers",
        element: <Suppliers />,
      },
      {
        path: "asset-movement",
        element: <AssetMovement />,
      },
      {
        path: "component-movement",
        element: <ComponentMovement />,
      },
      {
        path: "locations",
        element: <Locations />,
      },
      {
        path: "employees",
        element: <Employees />,
      },
      {
        path: "departments",
        element: <Departments />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "alert",
        element: <Alert />,
      },
      {
        path: "qrcode",
        element: <QRcode />,
      },
      {
        path: "usermanagement",
        element: <UserManagement />,
      },
      {
        path: "roleandpermission",
        element: <RoleandPermission />,
      },
    ],
  },
]);

export default router;
