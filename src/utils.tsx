import * as React from 'react';
import ms from 'milsymbol'
import { Select, MenuItem } from "@mui/material";
import { DEFAULTSIDC } from './defaults';

export const createIcon = (sidc: string, desc?: string) => <img className='marginRight' src={new ms.Symbol(sidc, { size: 50, quantity: desc }).asCanvas().toDataURL()} />
export const strReplaceAt = function (str: string, index: number, replacement: string) {
    return str.substring(0, index) + replacement + str.substring(index + replacement.length);
}

type selectOptions = {
    desc: string,
    code: string
}
type tagOptions = "Top" | "Side" | "hidden"

type msSelectOptions = {
    setter: Function,
    part: string,
    options: selectOptions[],
    showTag?: tagOptions,
    position: number
}
export const MSSelect = ({ setter, part, options, showTag = "Top", position }: msSelectOptions) => {

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