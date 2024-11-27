
import Layout from "../layout/Layout";
import SettingsLayout from "../layout/SettingsLayout";
import OrganisationDetails from "../pages/organisation";
import Department from "../pages/departments/department";
import Designation from "../pages/designations/designations";
import PeopleDashboard from "../pages/dashboard";
import Login from "../pages/login/login";
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
      },
    ],
  },
  {
path:"/dashboard",
element: <PeopleDashboard />
  },
  {
    path: "settings",
    element: <SettingsLayout />,
    children: [
      {
        index: true,
        element: <OrganisationDetails />,
      },
      {
        path: "department",
        element: <Department />,
      },
      {
        path: "designation",
        element: <Designation />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
