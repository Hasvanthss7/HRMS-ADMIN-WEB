import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import SettingsLayout from "../layout/SettingsLayout";
import PeopleDashboard from "../pages/dashboard";
import Department from "../pages/departments/department";
import Designation from "../pages/designations/designations";
import Login from "../pages/login/login";
import OrganisationDetails from "../pages/organisation";
import RolesPermissions from "../pages/roles-permissions/roles-permissions";
import Location from "../pages/locations/location";
import Leaves from "../pages/leaves/leaves";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "dashboard",
        element: <PeopleDashboard />,
      },
    ],
  },

  {
    path: "settings",
    element: <SettingsLayout />,
    children: [
      {
        index: true,
        path: "general",
        element: <OrganisationDetails />,
      },
      {
        path: "department",
        element: <Department />,
      },
      {
        path: "location",
        element: <Location />,
      },
      {
        path: "designations",
        element: <Designation />,
      },
      {
        path: "leaves",
        element: <Leaves />,
      },
      {
        path: "roles-permissions",
        element: <RolesPermissions />,
      },
    ],
  },
]);

export default router;
