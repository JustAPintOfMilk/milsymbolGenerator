import * as React from 'react';
import { MSSelect } from '../../utils';

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
    <MSSelect options={CONTEXTOPTIONS} setter={setter} part={part} position={2} showTag="Side" />


export default Context;