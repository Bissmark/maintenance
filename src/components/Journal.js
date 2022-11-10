import { Button, TextField } from "@mui/material";
import { useState } from "react";

const Journal = () => {
    const [entry, setEntry] = useState('');

    const handleChange = (e) => {
        setEntry({...entry, [e.target.name]: e.target.value});
    }

    return (
        <div>
            Journal coming soon
            <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={10}
                defaultValue={ entry }
                onChange={ handleChange }
            />
            <Button>
                Save
            </Button>
        </div>
    )
}

export default Journal;