import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Drawer, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import FormInput from "../../components/formFields/FormInput";
import {
  OrganisationHeading,
  OrganisationLeaves,
  OrganisationLocation,
} from "../organisation/OrganisationOutput";

const Leaves = () => {
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
  const data = {
    leaveName: { label: "Leave Name", value: "Casual Leave" },
    leaveCode: { label: "Leave Code", value: "CL" },
    annualPeriod: {
      label: "Accrual Period",
      value: "Monthly",
    },
    maxLeavesPerPeriod: { label: "Max leaves per period", value: "2 Leaves" },
    maxMonthlyUsage: { label: "Max Monthly Usage", value: "02" },
    requiredDocuments: { label: "Required Documents", value: "No " },
    leaveDescription: {
      label: "Leave Description",
      value:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratsed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ",
    },
  };

  return (
    <Box>
      {/* Organisation Details Header */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <OrganisationHeading label="Leaves" />
        <Button
          sx={{
            width: "180px",
            height: "max-content",
          }}
          onClick={toggleDrawer(true)}
        >
          Add New Leave
        </Button>
      </Box>

      {/* Organisation Info Grid */}

      <OrganisationLeaves data={data} />

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
            alignItems: "center",
            backgroundColor: "#A7DAE8",
            // width: "100%",
            px: 2,
            py: 1,
          }}
        >
          {" "}
          <Typography variant="h6">Add Leave</Typography>
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
                label="Leave Name"
                type="text"
                name="leaveName"
                // defaultValue="Hello"
              />

              <FormInput
                label="Leave Code"
                type="text"
                name="leaveCode"
                // defaultValue="Hello"
              />

              <FormInput
                label="Description"
                type="text"
                name="description"
                // defaultValue="Hello"
              />

              <FormInput
                label="Accrual Period"
                type="text"
                name="accrualPeriod"
                // defaultValue="Hello"
              />
              <FormInput
                label="Max Leaves per Period"
                type="text"
                name="maxLeavesperPeriod"
                // defaultValue="Hello"
              />
              <FormInput
                label="Max Monthly Usage"
                type="text"
                name="maxMonthlyUsage"
                // defaultValue="Hello"
              />
                           <FormInput
                label="Required Documents"
                type="text"
                name="requiredDocuments"
                // defaultValue="Hello"
              />
              <Button sx={{ width: "180px" }}>Submit</Button>
            </Box>
          </form>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Leaves;
