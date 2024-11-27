import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";

const tabsData = [
  { label: "General", route: "/dashboard" },
  { label: "Departments", route: "/deals" },
  { label: "Locations", route: "/departments" },
  { label: "Designations", route: "/settings" },
  { label: "Holidays", route: "/settings" },
  { label: "Leaves", route: "/settings" },
  { label: "Roles & Permissions", route: "/settings" },
];

// Define the custom styles for active and inactive tabs
const tabStyles = (isActive: boolean) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: 1,
  paddingLeft: 4, // Padding for the content inside the tab
  width: "100%",
  position: "relative",
  textTransform: "capitalize",
  fontSize: "16px",
  color: isActive ? "#017593" : "#007693", // Set the active color
  fontWeight: isActive ? "bold" : "normal", // Set bold for active state
  "&::before": isActive
    ? {
        content: '""',
        position: "absolute",
        top: "50%",
        left: 0, // Align the bar to the leftmost edge
        transform: "translateY(-50%)", // Center the indicator vertically
        width: "6px",
        height: "40px",
        background: "#017593",
        borderRadius: "0px 8px 8px 0px",
        opacity: 1,
      }
    : {},
});

const SettingsSideBar: React.FC = () => {
  const [value, setValue] = React.useState(0); // Track which tab is active

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: 240, // Set a fixed width for the sidebar
        borderRight: 1,
        borderColor: "divider",
        height: "100%",
        padding: 0, // Ensure there's no padding around the sidebar
      }}
    >
      <Box
        sx={{
          color: "#017593",
          display: "flex",
          flexDirection: "column",
          //   justifyContent: "space-between",
          height: "inherit",
        }}
      >
        <Box
          sx={{
            padding: "2px",
            backgroundColor: "#A7DAE8",
          }}
        >
          <Button
            startIcon={<ArrowBackIcon />}
            sx={{
              textTransform: "capitalize",
              fontSize: "18px",
              paddingLeft: 2,
            }}
          >
            Settings
          </Button>
        </Box>
        <Tabs
          orientation="vertical"
          value={value} // Set the current tab value
          onChange={handleChange}
          sx={{
            color: "#017593",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: 0, // Ensure no padding affects the alignment
            ".MuiTabs-indicator": {
              width: "0px", // Remove default indicator
            },
          }}
        >
          <Accordion expanded sx={{ border: "none", boxShadow: "none" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                color="primary"
                variant="h6"
                sx={{ paddingLeft: 2, fontSize: "18px" }}
              >
                Organisation
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ left: 0, padding: 0 }}>
              {tabsData.map((tab, index) => (
                <Tab
                  key={index}
                  label={tab.label}
                  sx={tabStyles(value === index)}
                  onClick={() => setValue(index)}
                />
              ))}
            </AccordionDetails>
          </Accordion>
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

export default SettingsSideBar;
