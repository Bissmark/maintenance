import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button } from '@mui/material';
import { useState } from 'react';
import GratitudeEntry from './GratitudeEntry';

const Gratitude = ({ text }) => {
    return (
        <div>
            Gratitude coming soon
            <p>Item 1: {text}</p>
            
            <Button href='/gratitude-entry'>
                <AddCircleIcon />    
            </Button>
            
        </div>
    )
}

export default Gratitude;