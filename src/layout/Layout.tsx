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
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Header />
      <SideBar />
      <Box sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>{" "}
      {/* Main content area */}
    </Box>
  );
};

export default Layout;
