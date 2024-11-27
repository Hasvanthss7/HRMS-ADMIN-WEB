import { Box, Typography } from "@mui/material";
import { Calendar } from "../../assets";
import StickyHeadTable from "../../components/tableComponents/DashboardTable";

const PeopleDashboard = () => {
  return (
    <Box sx={{padding:5}}>
    <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
    
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h3">Good Morning, Basha Mohammad! 👋</Typography>
          <Typography variant="body1">
            Let's manage your employees in one place.
          </Typography>
        </Box>
        <Box
          sx={{
            display:"flex",
            alignItems: "center",
            gap: 2,
            border: "1px solid #0175934D",
            borderRadius: "10px",
            boxShadow: "0px 2px 10px #0000000F",
            padding: 2,
          }}
        >
          <img
            src={Calendar}
            alt="Calendar"
            style={{ width: "25px", height: "25px" }}
          />
          <Typography variant="body1" sx={{ color: "#017593" }}>
            Monday, 01 July 2024
          </Typography>
        </Box>

    </Box>
    <StickyHeadTable />
    </Box>
  );
};

export default PeopleDashboard;
