import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const GratitudeEntry = () => {
  const [text, setText] = useState('');  


  const handleSubmit = async (e) => {
    e.preventDefault();
    setText(e.target[0].value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          type="text"
          label="I am grateful for ..." 
          variant="outlined" 
          
        />
        <Button type='submit'> 
            Save    
        </Button>
        <h1>{text}</h1>
      </form>  
    </div>    
  );
}

const GratitudeInput = () => {

}
export default GratitudeEntry