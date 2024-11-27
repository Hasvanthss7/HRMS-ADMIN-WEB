import { Box, TextField } from "@mui/material";

interface FormInputprops {
  label: string;
  type: string;
  name: string;
  placeHolder?: string;
  defaultValue?: string;
  register?: any;
}

const FormInput = (props: FormInputprops) => {
  return (
    <Box sx={{}}>
      <label>{props.label}</label>
      <TextField
        sx={{ marginTop: "5px" }}
        fullWidth
        size="small"
        variant="outlined"
        type={props.type}
        placeholder={props.placeHolder}
        name={props.name}
        defaultValue={props.defaultValue}
        // {...props.register(props.name)}
      />
    </Box>
  );
};

export default FormInput;
