// SideBar.tsx
import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BusinessIcon from "@mui/icons-material/Business";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Dashboard, Employees, LeaveRequests } from "../assets";

const tabsData = [
  {
    label: "Dashboard",
    icon: <img src={Dashboard} alt="Dashboard Icon" />,
    route: "/dashboard",
  },
  {
    label: "Deals",
    icon: <img src={Employees} alt="Employees Icon" />,
    route: "/deals",
  },
  {
    label: "Departments",
    icon: <img src={LeaveRequests} alt="Departments Icon" />,
    route: "/departments",
  },
  {
    label: "Settings",
    icon: <SettingsOutlinedIcon sx={{ color: "#017593" }} />,
    route: "/settings",
  },
];

const tabStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start", // Left align icon and label
  alignItems: "center",
  gap: 1,
  width: "100%", // Make tab take full width
};

const SideBar: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: 240, // Set a fixed width for the sidebar
        borderRight: 1,
        borderColor: "divider", // Keep the sidebar fixed
        height: "100%", // Set the sidebar to full height
      }}
    >
      <Tabs
        orientation="vertical"
        value={value} // Set the current tab value
        onChange={handleChange}
        textColor="inherit"
        indicatorColor="secondary"
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start", // Left align the tabs
          paddingTop: 2, // Add some top padding
        }} // Align tabs vertically
      >
        {tabsData.map((tab, index) => (
          <Tab
            key={index}
            icon={tab.icon}
            label={tab.label}
            sx={tabStyles} // Apply common styles
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default SideBar;
