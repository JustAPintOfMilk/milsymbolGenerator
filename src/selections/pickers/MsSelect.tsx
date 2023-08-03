import * as React from 'react';
import { Select, MenuItem } from "@mui/material";
import ms from 'milsymbol'
import { DEFAULTSIDC } from '../../defaults';

const createIcon = (sidc: string, desc?: string) => <img className='marginRight' src={new ms.Symbol(sidc, { size: 50, quantity: desc }).asCanvas().toDataURL()} />
const strReplaceAt = function (str: string, index: number, replacement: string) {
    return str.substring(0, index) + replacement + str.substring(index + replacement.length);
}

type selectOptions = {
    desc: string,
    code: string
}

type msSelectOptions = {
    setter: Function,
    part: string,
    options: selectOptions[],
    showTag?: "Top" | "Side" | "hidden",
    position: number
}


 const MsSelect = ({ setter, part, options, showTag = "Top", position }: msSelectOptions) => {

    return <>
        <Select value={part} onChange={e => setter(e.target.value)}>
            {
                options.map((option, index) =>
                    <MenuItem key={index} value={option.code}>{createIcon(strReplaceAt(DEFAULTSIDC, position, option.code), showTag === "Top" ? option.desc : "")}{showTag === "Side" && option.desc}</MenuItem>
                )
            }
        </Select>
    </>
}
export default MsSelect