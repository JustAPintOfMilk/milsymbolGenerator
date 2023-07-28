import { TextField } from '@mui/material';
import * as React from 'react';

//pos19-20
type options = {
    setter: (part: string) => void
    part: string
}
const Sector2Mod = ({ setter, part }: options) => {

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

export default Sector2Mod;