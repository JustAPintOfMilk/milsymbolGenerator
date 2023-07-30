import { Select, MenuItem } from '@mui/material';
import * as React from 'react';



type modifierType = { desc: string, code: string }
type modifiersType = {
    modOnes?: modifierType[], mod1: string, mod1Setter: (part: string) => void,
    modTwos?: modifierType[], mod2: string, mod2Setter: (part: string) => void
}
const Modifiers = ({ modOnes, mod1, mod1Setter, modTwos, mod2, mod2Setter }: modifiersType) => {
    return <div className='row wrap'>
        {
            modOnes && modOnes.length > 0 && <Select sx={{ minWidth: '200px' }} value={mod1} onChange={e => mod1Setter(e.target.value)}>
                {modOnes.map(option => <MenuItem key={option.code} value={option.code}>{option.desc}</MenuItem>)}
            </Select>
        }
        {
            modTwos && modTwos.length > 0 && <Select sx={{ minWidth: '200px' }} value={mod2} onChange={e => mod2Setter(e.target.value)}>
                {modTwos.map(option => <MenuItem key={option.code} value={option.code}>{option.desc}</MenuItem>)}
            </Select>
        }
    </div>
}

export default Modifiers;