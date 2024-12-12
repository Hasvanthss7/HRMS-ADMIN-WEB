// Layout.tsx
import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SettingsSideBar from "./SettingsSideBar";

const SettingsLayout: React.FC = () => {
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
      <Box
        sx={{ display: "flex", flexGrow: 1, minHeight: "calc(100vh - 90px)" }}
      >
        <SettingsSideBar />
        <Box
          sx={{
            backgroundColor: "#F3F8F9",
            flexGrow: 1,
            display: "flex",
            height: "100%",
          }}
        >
          <Box
            sx={{
              margin: "16px",
              padding: "16px",
              borderRadius: "10px",
              backgroundColor: "#FFFFFF",
              flexGrow: 1, // Make the outlet container grow
              display: "flex",
              flexDirection: "column",
              height: "90%",
              width: "calc(100vw - 306px)" ,
            }}
          >
            {/* This ensures background color takes the full height */}
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SettingsLayout;
