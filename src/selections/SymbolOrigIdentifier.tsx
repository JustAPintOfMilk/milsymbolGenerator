import { TextField } from '@mui/material';
import * as React from 'react';

//pos11-12
type options = {
    setter: (part: string) => void
    part: string
    length?: number
}
const SymbolOrigIdentifier = ({ setter, part, length = 3 }: options) => {

    return <>
        <TextField
            label="Number"
            type="number"
            InputLabelProps={{
                shrink: true,
            }}
            value={part}
            onChange={e => {
                const value = e.target.value.padStart(length, "0")
                if (value.length === length && !value.includes("-")) {
                    setter(value)
                }
            }}
        />
    </>
}

export default SymbolOrigIdentifier;