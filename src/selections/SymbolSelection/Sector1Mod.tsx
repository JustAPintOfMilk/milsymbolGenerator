import { TextField } from '@mui/material';
import * as React from 'react';

//pos17-18
type options = {
    setter: (part: string) => void
    part: string
}
const Sector1Mod = ({ setter, part }: options) => {

    return <>
        <TextField
            label="Number"
            type="number"
            InputLabelProps={{
                shrink: true,
            }}
            value={part}
            onChange={e => {
                const value = e.target.value.padStart(2, "0")
                if (value.length === 2&& !value.includes("-")) {
                    setter(value)
                }
            }}
        />
    </>
}

export default Sector1Mod;