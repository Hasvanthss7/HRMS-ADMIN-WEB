import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "../Theme/Theme";
import Header from "../layout/Header";
import ResponsiveDrawer from "../layout/SideBar";
import Layout from "../layout/Layout";
import { RouterProvider } from "react-router-dom";
import router from "./routesContainer";
import OrganisationDetails from "../pages/organisation";
import { Dashboard } from "../assets";
import dashboard from '../pages/dashboard/index';
import PeopleDashboard from "../pages/dashboard/index";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <ThemeProvider theme={Theme}>
      <QueryClientProvider client={queryClient}>
        {/* <ResponsiveDrawer /> */}
        {/* <OrganisationDetails /> */}
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
