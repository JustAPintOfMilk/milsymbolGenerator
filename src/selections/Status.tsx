import { Button, MenuItem, Select, TextField } from '@mui/material';
import * as React from 'react';
import { MSSelect, createIcon, strReplaceAt } from '../utils';
import { DEFAULTSIDC } from '../defaults';

//pos7
type options = {
    setter: (part: string) => void
    part: string
}
type statusOption = {
    desc: string,
    code: string
}

const STATUSOPTIONS: statusOption[] = [
    { code: "0", desc: "Present" },
    { code: "1", desc: "Planned/Anticipated/Suspect" },
    { code: "2", desc: "Fully capable" },
    { code: "3", desc: "Damaged" },
    { code: "4", desc: "Destroyed" },
    { code: "5", desc: "Full to capacity" }
    // { code: "9", desc: "Version extension flag" }
]

const Status = ({ setter, part }: options) => <MSSelect options={STATUSOPTIONS} setter={setter} part={part} position={6} showTag="Side" />

export default Status;