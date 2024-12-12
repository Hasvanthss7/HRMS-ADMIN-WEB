import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Drawer,
  Grid2,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import FormInput from "../../components/formFields/FormInput";
import {
  OrganisationDepartment,
  OrganisationHeading,
} from "../organisation/OrganisationOutput";

const Department = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: any) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <Box sx={{}}>
      {/* Organisation Details Header */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          
        }}
      >
        <OrganisationHeading label="Departments" />
        <Button
          sx={{
            backgroundColor: "#007693",
            color: "#FFFFFF",
            borderRadius: "8px",
            textTransform: "capitalize",
            width: "200px",
            whiteSpace: "nowrap",
            height: "max-content",
          }}
          onClick={toggleDrawer(true)}
        >
          Add New Department
        </Button>
      </Box>

      {/* Organisation Info Grid */}
      <Grid2 container>
        <Grid2 size={4}>
          <OrganisationDepartment
            label="Frontend Department"
            onClick={toggleDrawer(true)}
          />
        </Grid2>
        <Grid2 size={4}>
          <OrganisationDepartment
            label="Frontend Department"
            onClick={toggleDrawer(true)}
          />
        </Grid2>
        <Grid2 size={4}>
          <OrganisationDepartment
            label="Frontend Department"
            onClick={toggleDrawer(true)}
          />
        </Grid2>
      </Grid2>

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ width: 550, overflowX: "hidden" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#A7DAE8",
            alignItems: "center",
            // width: "100%",
            px: 2,
            py: 1,
          }}
        >
          {" "}
          <Typography variant="h6">Edit Department</Typography>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
          sx={{ padding: 2 }}
          role="presentation"
          //   onClose={toggleDrawer(false)}
          //   onKeyDown={toggleDrawer(false)}
        >
          <form>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: "100%",
              }}
            >
              <FormInput
                label="Department Name"
                type="text"
                name="departmentName"
                placeHolder="Enter your Department Name"
                // defaultValue="Hello"
              />
              <Button variant="contained" sx={{ width: "60%" }}>
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Department;
