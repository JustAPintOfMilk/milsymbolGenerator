import { TextField } from '@mui/material';
import * as React from 'react';

//pos1-2
type options = {
    setter: (part: string) => void
    part: string
}
const Version = ({ setter, part }: options) => {
    return <>
        <TextField
            label="Version"
            type="number"
            value={part}
            onChange={e => {
                const value = e.target.value.padStart(2, "0")
                setter(value)
                if (value.length === 2 && !value.includes("-")) {
                    if (Number(value) <= 39 && Number(value) >= 10) {
                        setter(value)
                    } else if (Number(value) < 10) {
                        setter("39")
                    }
                    else if (Number(value) > 39) {
                        setter("10")
                    }
                } else {
                    setter("39")
                }
            }}
        />
    </>
}

export default Version;