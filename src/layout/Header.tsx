import SearchIcon from "@mui/icons-material/Search";
import {
  Avatar,
  Box,
  Divider,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { NotificationIcon, PeopleLogo } from "../assets";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "70px",
          display: "flex",
          justifyContent: "space-between", // Use space-between to push items to the sides
          alignItems: "center",
          borderBottom: "1px solid #1212121A", // Center items vertically
        }}
      >
        {/* Left Section: Logo and Search */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 240, // Align items vertically
              borderRight: "1px solid #1212121A",
              height: "100%",
            }}
          >
            <img src={PeopleLogo} alt="Logo" style={{ height: "40px" }} />{" "}
            {/* Space between logo and search */}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              sx={{ ml: 2, width: "100%", borderRadius: "20px" }}
              placeholder="Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                sx: {
                  height: "40px", // Set input height
                },
              }}
            />
          </Box>
        </Box>

        {/* Right Section: Notifications and User Info */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center", // Center items vertically
            gap: "8px", // Space between elements
            paddingRight: "20px",
          }}
        >
          <img
            src={NotificationIcon}
            alt="Notification"
            style={{
              width: "16px",
            }}
          />
          <Divider orientation="vertical" variant="middle" flexItem />
          <Typography>Basha Mohammad</Typography>
          <Avatar>H</Avatar>
        </Box>
      </Box>
    </>
  );
};

export default Header;
