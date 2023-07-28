
import * as React from 'react';
import SymbolSet from './SymbolSet';
import Entity from './Entity';
import Sector1Mod from './Sector1Mod';
import Sector2Mod from './Sector2Mod';
import setsArr from './symbol.json'

type symbolSelectionType = {
    set: string, setSetter: (part: string) => void,
    entity: string, entitySetter: (part: string) => void,
    mod1: string, mod1Setter: (part: string) => void,
    mod2: string, mod2Setter: (part: string) => void
}

const SymbolSelection = ({ set, setSetter, entity, entitySetter, mod1, mod1Setter, mod2, mod2Setter }: symbolSelectionType) => {
    const setObj = setsArr.find(option => option.code === set)
    return <>
        <SymbolSet options={setsArr} part={set} setter={setSetter} />
        {
            setObj?.entities && <>
                <Entity options={setObj.entities} part={entity} setter={entitySetter} />
                <Sector1Mod part={mod1} setter={mod1Setter} />
                <Sector2Mod part={mod2} setter={mod2Setter} />
            </>
        }
    </>
}

export default SymbolSelection;