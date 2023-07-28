import { Select, MenuItem } from '@mui/material';
import * as React from 'react';

//pos11-16

type entitySubtypeOption = { desc: string, code: string }
type entityTypeOption = { entityType: string, code: string, subTypes?: entitySubtypeOption[] }
type entityOption = { entity: string, code: string, types?: entityTypeOption[] }
type options = {
    setter: (part: string) => void
    part: string,
    options: entityOption[]
}

const Entity = ({ options, setter, part }: options) => {
    const entity = options.find((option) => part.substring(0, 2) === option.code.substring(0, 2))
    const entityType = entity?.types?.find?.(option => part.substring(2, 4) === option.code.substring(2, 4))
    return <div className='row'>
        <Select value={part.substring(0, 2)} onChange={e => setter(e.target.value.padEnd(6, "0"))}>
            {options.map(option => <MenuItem key={option.code} value={option.code.substring(0, 2)}>{option.entity}</MenuItem>)}
        </Select>
        {
            entity?.types && <><Select value={part.substring(0, 4)} onChange={e => setter(e.target.value.padEnd(6, "0"))}>
                {entity.types.map(option => <MenuItem key={option.code} value={option.code.substring(0, 4)}>{option.entityType}</MenuItem>)}
            </Select>
                {
                    entityType?.subTypes && <Select value={part} onChange={e => setter(e.target.value)}>
                        {entityType.subTypes.map(option => <MenuItem key={option.code} value={option.code}>{option.desc}</MenuItem>)}
                    </Select>
                }

            </>
        }
    </div >
}

export default Entity;