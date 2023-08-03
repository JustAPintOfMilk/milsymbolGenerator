import * as React from 'react';
import MsSelect from '../pickers/MsSelect';

//pos3-4
type options = {
    setter: (part: string) => void
    part: string
}

type HostilityOption = {
    desc: string,
    code: string
}

const HOSTILITYOPTIONS: HostilityOption[] = [
    { code: "0", desc: "Pending" },
    { code: "1", desc: "Unknown" },
    { code: "2", desc: "Assumed Friend" },
    { code: "3", desc: "Friend" },
    { code: "4", desc: "Neutral" },
    { code: "5", desc: "Suspect/Joker" },
    { code: "6", desc: "Hostile/Faker" }
]


const Hostility = ({ setter, part }: options) =>
    <MsSelect options={HOSTILITYOPTIONS} setter={setter} part={part} position={3} showTag="Side" />


export default Hostility;