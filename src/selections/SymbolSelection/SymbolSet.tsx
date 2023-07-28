import { MenuItem, Select } from '@mui/material';
import * as React from 'react';

//pos5-6
type setoption = {
    code: string
    desc: string,
}
type options = {
    setter: (part: string) => void
    part: string,
    options: setoption[]
}


const SymbolSet = ({ options, setter, part }: options) => {
    return <>
        <Select value={part} onChange={e => setter(e.target.value)}>
            {options.map((option) => <MenuItem value={option.code}>{option.desc}</MenuItem>)}
        </Select>
    </>
}

export default SymbolSet;