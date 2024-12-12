import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Drawer, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import FormInput from "../../components/formFields/FormInput";
import {
  OrganisationHeading,
  OrganisationLocation,
} from "../organisation/OrganisationOutput";

const Location = () => {
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
    organisationName: { label: "Location Name", value: "Hi Tech City" },
    mobileNumber: { label: "Mobile Number", value: "+91 970 002 3336" },
    address: {
      label: "Address",
      value: "Workafella Co-Working space, Hi Tech City",
    },
    city: { label: "City", value: "Hyderabad" },
    state: { label: "State", value: "Telangana" },
    pincode: { label: "Pincode", value: "500081 " },
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
        <OrganisationHeading label="Locations" />
        <Button
          sx={{
            width: "180px",
            height: "max-content",
          }}
          onClick={toggleDrawer(true)}
        >
          Add New Location
        </Button>
      </Box>

      {/* Organisation Info Grid */}

      <OrganisationLocation data={data} />

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
          <Typography variant="h6">Add Location</Typography>
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
                label="Location Name"
                type="text"
                name="locationName"
                placeHolder="Enter your Location Name"
                // defaultValue="Hello"
              />

              <FormInput
                label="Mobile Number"
                type="text"
                name="Mobile Number"
                placeHolder="Enter your Mobile Number.."
                // defaultValue="Hello"
              />

              <FormInput
                label="Address"
                type="text"
                name="Address"
                placeHolder="Enter your Address.."
                // defaultValue="Hello"
              />

              <FormInput
                label="City"
                type="text"
                name="City"
                placeHolder="Enter your CIty.."
                // defaultValue="Hello"
              />
              <FormInput
                label="State"
                type="text"
                name="State"
                placeHolder="Enter your State.."
                // defaultValue="Hello"
              />
              <FormInput
                label="Pincode"
                type="text"
                name="Pincode"
                placeHolder="Enter your Pincode.."
                // defaultValue="Hello"
              />
              <Button sx={{ width: "180px" }} >Submit</Button>
            </Box>
          </form>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Location;
