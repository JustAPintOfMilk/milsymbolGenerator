import { MenuItem, Select, Icon, SvgIcon, Button } from '@mui/material';
import * as React from 'react';
import ms from 'milsymbol'
import { DEFAULTSIDC } from '../defaults';
import { createIcon, strReplaceAt } from '../utils';

//pos3-4
type options = {
    setter: (part: string) => void
    part: string
}
const StandardIdentity = ({ setter, part }: options) => {

    return <div className="column">
        <div className="row">
            <div className="row marginAuto">
                {
                    Array(3).fill(0).map((_, index) =>
                        <Button key={index} onClick={() => setter(index.toString() + part.charAt(1))}> {createContextMenuItem(index)}</Button>
                    )
                }
            </div>
        </div>
        <div className="row">
            <div className="row marginAuto">
                {
                    Array(7).fill(0).map((_, index) =>
                        <Button key={index} onClick={() => setter(part.charAt(0) + index.toString())}> {createStandardIdentityMenuItem(index)}</Button>
                    )
                }
            </div>
        </div>
    </div>
}

const CONTEXTDESCIRPTION = [
    "Reality",
    "Exercise",
    "Simulation",
    "Reserved for Future use"
]

const createContextMenuItem = (index: number) => createIcon(strReplaceAt(DEFAULTSIDC, 2, index.toString()), CONTEXTDESCIRPTION[index])

const STANDARDIDENTITYDESCIRPTION = [
    "Pending",
    "Unknown",
    "Assumed Friend",
    "Friend",
    "Neutral",
    "Suspect/Joker",
    "Hostile/Faker",
    "Reserved for Future use",
]

const createStandardIdentityMenuItem = (index: number) => createIcon(strReplaceAt (DEFAULTSIDC, 3, index.toString()), STANDARDIDENTITYDESCIRPTION[index])


export default StandardIdentity;