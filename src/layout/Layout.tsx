// Layout.tsx
import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout: React.FC = ({}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      <Header />
      <Box
        sx={{
          height: `calc( 100vh - 70px)`,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <SideBar />
        <Box sx={{ width: `calc( 100vw - 257px)` }}>
          <Outlet />
        </Box>
      </Box>
      {/* Main content area */}
    </Box>
  );
};

export default Layout;
