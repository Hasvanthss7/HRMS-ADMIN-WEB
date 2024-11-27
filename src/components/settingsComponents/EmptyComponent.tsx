import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { emptyImage } from '../../assets';

export const EmptyComponent = (props:{label:string}) => {
  return (
    <Box>
        <img>{emptyImage}</img>
      <Typography>{props.label}</Typography>
    </Box>
  );
};


