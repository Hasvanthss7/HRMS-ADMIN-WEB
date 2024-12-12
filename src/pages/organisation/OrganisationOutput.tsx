import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Chip, Grid, IconButton, Typography } from "@mui/material";
import { data } from "react-router-dom";
import { editIcon } from "../../assets";

export const OrganisationField = (props: { label: string; value: string }) => {
  return (
    <Grid item xs={4}>
      <Typography>{props.label}</Typography>
      <Typography>{props.value}</Typography>
    </Grid>
  );
};
export const OrganisationHeading = (props: { label: string }) => {
  return (
    <Box sx={{ py: 2 }}>
      <Typography
        sx={{
          fontSize: "24px",
          display: "inline-block",
          "&::after": {
            content: '""',
            display: "block",
            width: "80px",
            height: "7px",
            background: "linear-gradient(94deg, #00AA93 0%, #017593 100%)",
            marginTop: "4px",
          },
        }}
      >
        {props.label}
      </Typography>
    </Box>
  );
};

export const OrganisationImageField = (props: {
  label: string;
  image: string;
}) => {
  return (
    <Grid item xs={4}>
      <Typography>{props.label}</Typography>
      <Grid
        sx={{
          backgroundColor: "#FCFCFC",
          border: "1px solid #E2E2E2",
          padding: "40px",
          width: "50%",
          borderRadius: "10px",
          marginTop: "10px",
          position: "relative", // Add relative positioning
        }}
      >
        {/* Delete Icon positioned in the top-right corner */}
        <DeleteIcon
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            color: "#1212124D",
            cursor: "pointer",
          }}
        />
        {/* Uploaded Image */}
        <img src={props.image} alt="CampX Logo" style={{ width: "100%" }} />
      </Grid>
    </Grid>
  );
};
export const OrganisationDepartment = (props: {
  label: string;
  onClick: any;
}) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#FCFCFC",
          border: "1px solid #E2E2E2",
          padding: "20px",
          width: "80%",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography>{props.label}</Typography>
        {/* Delete Icon positioned in the top-right corner */}
        <IconButton onClick={props.onClick}>
          <img
            style={{
              position: "absolute",
              top: "0px",
              right: "20px",
              color: "#1212124D",
              cursor: "pointer",
            }}
            src={editIcon}
          />
        </IconButton>
        {/* Uploaded Image */}
      </Box>
    </>
  );
};

export const OrganisationHolidays = (props: {
  label: string;
  value: string;
}) => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#FCFCFC",
        border: "1px solid #E2E2E2",
        padding: "20px",
        width: "100%",
        borderRadius: "10px",
        marginTop: "10px",
        position: "relative", // Add relative positioning
      }}
    >
      <Grid item xs={4}>
        <Typography>{props.label}</Typography>
        <Typography>{props.value}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography>{props.label}</Typography>
        <Chip
          label={props.value}
          variant="filled"
          color="secondary"
          sx={{ color: "#017593" }}
        />
      </Grid>{" "}
      <Grid item xs={4} sx={{ textAlign: "right" }}>
        <IconButton>
          {" "}
          <img
            style={{
              position: "absolute",
              top: "0px",
              right: "10px",
              color: "#1212124D",
              cursor: "pointer",
            }}
            src={editIcon}
          />
        </IconButton>
      </Grid>
    </Grid>
  );
};
export const OrganisationLocation = (props: { data: any }) => {
  console.log("data", data);
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#FCFCFC",
        border: "1px solid #E2E2E2",
        padding: "20px",
        width: "100%",
        borderRadius: "10px",
        marginTop: "10px",
        position: "relative", // Add relative positioning
      }}
      rowGap={3}
    >
      <Grid item xs={4}>
        <Typography sx={{ fontSize: "14px", opacity: 0.6 }}>
          {props.data.organisationName.label}
        </Typography>
        <Typography>{props.data.organisationName.value}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography sx={{ fontSize: "14px", opacity: 0.6 }}>
          {props.data.mobileNumber.label}
        </Typography>
        <Typography>{props.data.mobileNumber.value}</Typography>
      </Grid>{" "}
      <Grid item xs={4}>
        <Typography sx={{ fontSize: "14px", opacity: 0.6 }}>
          {props.data.address.label}
        </Typography>
        <Typography>{props.data.address.value}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography sx={{ fontSize: "14px", opacity: 0.6 }}>
          {props.data.city.label}
        </Typography>
        <Typography>{props.data.city.value}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography sx={{ fontSize: "14px", opacity: 0.6 }}>
          {props.data.state.label}
        </Typography>
        <Typography>{props.data.state.value}</Typography>
      </Grid>{" "}
      <Grid item xs={4}>
        <Typography sx={{ fontSize: "14px", opacity: 0.6 }}>
          {props.data.pincode.label}
        </Typography>
        <Typography>{props.data.pincode.value}</Typography>
      </Grid>
      <Grid item xs={4} sx={{ textAlign: "right" }}>
        <IconButton>
          {" "}
          <img
            style={{
              position: "absolute",
              top: "-140px",
              right: "-1000px",
              color: "#1212124D",
              cursor: "pointer",
            }}
            src={editIcon}
          />
        </IconButton>
      </Grid>
    </Grid>
  );
};
export const OrganisationLeaves = (props: { data: any }) => {
  console.log("data", data);
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#FCFCFC",
        border: "1px solid #E2E2E2",
        padding: "20px",
        width: "100%",
        borderRadius: "10px",
        marginTop: "10px",
        position: "relative", // Add relative positioning
      }}
      rowGap={3}
    >
      <Box sx={{display:"flex", flexDirection:"row"}}>
      <Grid container rowSpacing={2}>
      <Grid item xs={4}>
        <Typography sx={{ fontSize: "14px", opacity: 0.6 }}>
          {props.data.leaveName.label}
        </Typography>
        <Typography>{props.data.leaveName.value}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography sx={{ fontSize: "14px", opacity: 0.6 }}>
          {props.data.leaveCode.label}
        </Typography>
        <Typography>{props.data.leaveCode.value}</Typography>
      </Grid>{" "}
      <Grid item xs={4}>
        <Typography sx={{ fontSize: "14px", opacity: 0.6 }}>
          {props.data.annualPeriod.label}
        </Typography>
        <Typography>{props.data.annualPeriod.value}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography sx={{ fontSize: "14px", opacity: 0.6 }}>
          {props.data.maxLeavesPerPeriod.label}
        </Typography>
        <Typography>{props.data.maxLeavesPerPeriod.value}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography sx={{ fontSize: "14px", opacity: 0.6 }}>
          {props.data.maxMonthlyUsage.label}
        </Typography>
        <Typography>{props.data.maxMonthlyUsage.value}</Typography>
      </Grid>{" "}
      <Grid item xs={4}>
        <Typography sx={{ fontSize: "14px", opacity: 0.6 }}>
          {props.data.requiredDocuments.label}
        </Typography>
        <Typography>{props.data.requiredDocuments.value}</Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography sx={{ fontSize: "14px", opacity: 0.6 }}>
          {props.data.leaveDescription.label}
        </Typography>
        <Typography>{props.data.leaveDescription.value}</Typography>
      </Grid>
      </Grid>
      <Box  sx={{ textAlign: "top" }}>
        <IconButton>
          <img 
            src={editIcon}
          />
        </IconButton>
      </Box>
      </Box>
    </Grid>
  );
};
