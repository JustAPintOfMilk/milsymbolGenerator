import { Select, MenuItem } from '@mui/material';
import * as React from 'react';

//pos11-16

type entitySubtypeOption = { desc: string, code: string }
type entityTypeOption = { desc: string, code: string, subTypes?: entitySubtypeOption[] }
type entityOption = { desc: string, code: string, types?: entityTypeOption[] }
type options = {
    setter: (part: string) => void
    part: string,
    options: entityOption[]
}

const Entity = ({ options, setter, part }: options) => {
    const entity = options.find((option) => part.substring(0, 2) === option.code)
    const entityType = entity?.types?.find?.(option => part.substring(2, 4) === option.code)
    return <div className="row wrap">
        <Select sx={{ minWidth: '200px' }} value={part.substring(0, 2)} onChange={e => setter(e.target.value.padEnd(6, "0"))}>
            {options.map(option => <MenuItem key={option.code} value={option.code.substring(0, 2)}>{option.desc}</MenuItem>)}
        </Select>
        {
            entity?.types && <><Select sx={{ minWidth: '200px' }} value={part.substring(2, 4)} onChange={e => {
                const value = entity.code + e.target.value
                setter(value.padEnd(6, "0"))
            }}>
                {entity.types.map(option => <MenuItem key={option.code} value={option.code}>{option.desc}</MenuItem>)}
            </Select>
                {
                    entityType?.subTypes && <Select sx={{ minWidth: '200px' }} value={part.substring(4, 6)} onChange={e => setter(entity.code + entityType.code + e.target.value)}>
                        {entityType.subTypes.map(option => <MenuItem key={option.code} value={option.code}>{option.desc}</MenuItem>)}
                    </Select>
                }

            </>
        }
    </div>
}

export default Entity;