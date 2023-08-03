import * as React from 'react';
import MsSelect from './pickers/MsSelect';

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

const Status = ({ setter, part }: options) => <MsSelect options={STATUSOPTIONS} setter={setter} part={part} position={6} showTag="Side" />

export default Status;