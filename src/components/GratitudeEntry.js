import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const GratitudeEntry = () => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField id="outlined-basic" label="I am grateful for ..." variant="outlined" />
        <Button>
            Save    
        </Button>  
    </Box>
    
  );
}

export default GratitudeEntry