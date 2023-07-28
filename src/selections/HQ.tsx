import { Select, MenuItem } from '@mui/material';
import * as React from 'react';
import { MSSelect } from '../utils';

//pos8
type options = {
    setter: (part: string) => void
    part: string
}
type hqOption = {
    desc: string,
    code: string
}

const HQOPTIONS: hqOption[] = [
    { code: "0", desc: "Unknown" },
    { code: "1", desc: "Feint/Dummy" },
    { code: "2", desc: "Headquarters" },
    { code: "3", desc: "Feint/Dummy Headquarters" },
    { code: "4", desc: "Task Force" },
    { code: "5", desc: "Feint/Dummy Task Force" },
    { code: "6", desc: "Task Force Headquarters" },
    { code: "7", desc: "Feint/Dummy Task Force Headquarters" }
    // { code: "9", desc: "Version extension flag" }
]
const HQ = ({ setter, part }: options) =>
    <MSSelect options={HQOPTIONS} part={part} setter={setter} position={7} showTag="Top" />

export default HQ;