import { TextField } from '@mui/material';
import * as React from 'react';
import MsSelect from './pickers/MsSelect';

//pos9-10
type options = {
    setter: (part: string) => void
    part: string
}
type descriptorOption = {
    code: string,
    desc: string
}
const DESCRIPTOROPTIONS: descriptorOption[] = [
    { code: "00", desc: "Unknown" },
    { code: "11", desc: "Team/Crew" },
    { code: "12", desc: "Squad" },
    { code: "13", desc: "Section" },
    { code: "14", desc: "Platoon/detachment" },
    { code: "15", desc: "Company/battery/troop" },
    { code: "16", desc: "Battalion/squad" },
    { code: "17", desc: "Regiment/group" },
    { code: "18", desc: "Brigade" },
    // { code: "19", desc: "Version extension flag" },
    { code: "21", desc: "Division" },
    { code: "22", desc: "Corps/MEF" },
    { code: "23", desc: "Army" },
    { code: "24", desc: "Army Group / front" },
    { code: "25", desc: "Region/Theater" },
    { code: "26", desc: "Command" },
    // { code: "29", desc: "Version extension flag" },
    { code: "31", desc: "Wheeled limited cross country" },
    { code: "32", desc: "Wheeled cross country" },
    { code: "33", desc: "Tracked" },
    { code: "34", desc: "Wheeled and tracked combination" },
    { code: "35", desc: "Towed" },
    { code: "36", desc: "Rail" },
    { code: "37", desc: "Pack animals" },
    // { code: "39", desc: "Version extension flag" },
    { code: "41", desc: "Over Snow" },
    { code: "42", desc: "Sled" },
    // { code: "49", desc: "Version extension flag" },
    { code: "51", desc: "Barge" },
    { code: "52", desc: "Amphibious" },
    // { code: "59", desc: "Version extension flag" },
    { code: "61", desc: "Short towed array" },
    { code: "62", desc: "Long towed array" },
    // { code: "69", desc: "Version extension flag" },
    // { code: "99", desc: "Version extension flag" }
]

const Descriptor = ({ setter, part }: options) =>
    <MsSelect options={DESCRIPTOROPTIONS} part={part} setter={setter} position={8} showTag="Side" />

export default Descriptor;