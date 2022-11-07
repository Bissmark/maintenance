import React, { useState } from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

import whiteTag from '../images/white-tag.jpg';
import thirtyDays from '../images/Thirty-days.png';
import sixtyDays from '../images/Sixty-days.png';
import ninetyDays from '../images/Ninety-days.png';
import sixMonths from '../images/Six-months.png';
import nineMonths from '../images/Nine-months.png';
import oneYear from '../images/One-year.png';
import eighteenMonths from '../images/Eighteen-months.png';
import multipleYears from '../images/Multiple-years.png';

const CleanTime = () => {
    const [value, setValue] = useState(dayjs(''));

    const handleChange = (newValue) => {
        setValue(newValue);
    }
    console.log(value);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
                <h1>When did you get sober?</h1>
                <MobileDatePicker
                    label="Date mobile"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </Stack>
            <button>Save</button>
            <img src={whiteTag}></img>
        </LocalizationProvider>
    )
}

export default CleanTime;