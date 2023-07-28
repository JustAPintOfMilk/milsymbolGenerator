import { TextField } from '@mui/material';
import * as React from 'react';

//pos11-12
type options = {
    setter: (part: string) => void
    part: string
}
const SymbolOrigSet = ({ setter, part }: options) => {

    return <>
        <TextField
            label="Number"
            type="number"
            InputLabelProps={{
                shrink: true,
            }}
            value={part}
            onChange={e => {
                const value = e.target.value
                if (value.length === 1&& !value.includes("-")) {
                    setter(value)
                }
            }}
        />
    </>
}

export default SymbolOrigSet;