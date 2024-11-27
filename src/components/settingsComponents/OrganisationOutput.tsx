import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Chip, Grid, IconButton, Typography } from "@mui/material";
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
    <Grid item xs={4}>
      <Grid
        sx={{
          backgroundColor: "#FCFCFC",
          border: "1px solid #E2E2E2",
          padding: "20px",
          width: "70%",
          borderRadius: "10px",
          marginTop: "10px",
          position: "relative", // Add relative positioning
        }}
      >
        <Typography>{props.label}</Typography>
        {/* Delete Icon positioned in the top-right corner */}

        <img
          onClick={props.onClick}
          style={{
            position: "absolute",
            top: "20px",
            right: "10px",
            color: "#1212124D",
            cursor: "pointer",
          }}
          src={editIcon}
        />
        {/* Uploaded Image */}
      </Grid>
    </Grid>
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
