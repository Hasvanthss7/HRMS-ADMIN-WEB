import CloseIcon from "@mui/icons-material/Close";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import {
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { CampX } from "../../assets";
import FormInput from "../../components/formFields/FormInput";
import {
  OrganisationField,
  OrganisationHeading,
  OrganisationHolidays,
  // OrganisationHolidays,
  OrganisationImageField,
} from "./OrganisationOutput";

const OrganisationDetails = () => {
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
    <Box>
      {/* Organisation Details Header */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <OrganisationHeading label="Organisation Details" />
        <Button
          startIcon={<EditNoteOutlinedIcon />}
          sx={{
            backgroundColor: "#007693",
            color: "#FFFFFF",
            borderRadius: "8px",
            textTransform: "capitalize",
            width: "180px",
            height: "max-content",
          }}
          onClick={toggleDrawer(true)}
        >
          Edit Details
        </Button>
      </Box>

      {/* Organisation Info Grid */}
      <Grid container spacing={4} sx={{ py: 2 }}>
        <OrganisationField label="Organisation Name" value="CampX" />
        <OrganisationField label="Email Address" value="info@campx.in" />
        <OrganisationField label="Mobile Number" value="+91 9700 0233 36" />
        <OrganisationField label="Website" value="www.campx.in" />
        <OrganisationField
          label="Address"
          value="Workafella Co-Working space, Hi Tech City, 
            Hyderabad, Telangana 500081."
        />
        <OrganisationField label="City" value="Hyderabad" />
        <OrganisationField label="State" value="Telangana" />
        <OrganisationField label="Pincode" value="500081" />
      </Grid>

      {/* Media Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <OrganisationHeading label="Media" />
      </Box>

      <Grid container spacing={4} sx={{ py: 2 }}>
        <OrganisationImageField label="Uploaded Logo" image={CampX} />
        <OrganisationImageField label="Uploaded Fav Icon" image={CampX} />
        <OrganisationHolidays label="ranganadh" value="Hasvanth" />
        <OrganisationHolidays
          label="ranganadh"
          value="HasvanthHasvanthHasvanth"
        />
        {/* <OrganisationHolidays label="front End" value="New Year" />
        <OrganisationHolidays label="front End" value="New Year" /> */}
      </Grid>

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
          <Typography variant="h6">Edit General Information</Typography>
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
                label="Organisation Name"
                type="text"
                name="organisationName"
                placeHolder="Enter your Organisation Name"
                // defaultValue="Hello"
              />

              <FormInput
                label="Email Address"
                type="text"
                name="Email Address"
                placeHolder="Enter your Email.."
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
                label="Website"
                type="text"
                name="Website"
                placeHolder="Enter your Website.."
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
              <label>Upload Logo</label>
              <input type="file" name="image" id="image" />
            </Box>
          </form>
        </Box>
      </Drawer>
    </Box>
  );
};

export default OrganisationDetails;
