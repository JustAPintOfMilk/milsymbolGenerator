import * as React from 'react';
import MsSelect from '../pickers/MsSelect';

//pos3-4
type options = {
    setter: (part: string) => void
    part: string
}

type contextOption = {
    desc: string,
    code: string
}

const CONTEXTOPTIONS: contextOption[] = [
    { code: "0", desc: "Reality" },
    { code: "1", desc: "Exercise" },
    { code: "2", desc: "Simulation" },
]

const Context = ({ setter, part }: options) =>
    <MsSelect options={CONTEXTOPTIONS} setter={setter} part={part} position={2} showTag="Side" />


export default Context;