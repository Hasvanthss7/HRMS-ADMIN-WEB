// Layout.tsx
import React from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout: React.FC = ({}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <SideBar />
      <Box sx={{ padding: 2, flexGrow: 1 }}></Box> {/* Main content area */}
    </Box>
  );
};

export default Layout;
