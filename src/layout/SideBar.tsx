import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Box, Button, Tab, Tabs } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
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
    route: "/settings/general",
  },
];
// Define the custom styles for active and inactive tabs
const tabStyles = (isActive: boolean) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: 1,
  paddingLeft: 4,
  width: "100%",
  position: "relative",
  textTransform: "capitalize",
  fontSize: "16px",
  "&::before": isActive
    ? {
        content: '""',
        position: "absolute",
        top: "50%",
        left: "0px", // Position it on the left side
        transform: "translateY(-50%)", // Center the indicator with respect to the tab
        width: "6px",
        height: "45px",
        background: "#017593",
        borderRadius: "0px 8px 8px 0px",
        opacity: 1,
      }
    : {},
});

const SideBar: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "257px", // Set a fixed width for the sidebar
        borderRight: 1,
        borderColor: "divider",
        height: "100%",
      }}
    >
      <Box
        sx={{
          color: "#017593",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "inherit",
        }}
      >
        <Tabs
          orientation="vertical"
          value={value} // Set the current tab value
          onChange={handleChange}
          textColor="inherit"
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            paddingTop: 2, // Add some top padding
            ".MuiTabs-indicator": {
              width: "0px", // Hide the default indicator by setting width to 0
            },
          }}
        >
          {tabsData.map((tab, index) => (
            <Tab
              key={index}
              icon={tab.icon}
              label={tab.label}
              sx={tabStyles(value === index)} // Apply custom styles with left-side indicator
              disableRipple
              onClick={() => navigate(tab.route)}
            />
          ))}
        </Tabs>
        <Button
          sx={{
            fontSize: "18px",
            fontFamily: "Avenir-medium",
            textTransform: "capitalize",
            color: "inherit",
            opacity: 0.6,
            paddingRight: 16,
          }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default SideBar;
