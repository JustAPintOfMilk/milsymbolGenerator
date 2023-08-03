
import * as React from 'react';
import SymbolSet from './SymbolSet';
import Entity from './Entity';
import setsArr from './symbol.json'
import Modifiers from './Modifiers';

type symbolSelectionType = {
    set: string, setSetter: (part: string) => void,
    entity: string, entitySetter: (part: string) => void,
    mod1: string, mod1Setter: (part: string) => void,
    mod2: string, mod2Setter: (part: string) => void
}

const SymbolSelection = ({ set, setSetter, entity, entitySetter, mod1, mod1Setter, mod2, mod2Setter }: symbolSelectionType) => {
    const setObj = setsArr.find(option => option.code === set)
    return <div className="row wrap">
        <SymbolSet options={setsArr} part={set} setter={setSetter} />
        {
            setObj && <div className="column">
                {setObj?.entities && <Entity options={setObj.entities} part={entity} setter={entitySetter} />}
                <Modifiers modOnes={setObj.mod1} mod1={mod1} mod1Setter={mod1Setter} modTwos={setObj.mod2} mod2={mod2} mod2Setter={mod2Setter} />
            </div>
        }
    </div>
}

export default SymbolSelection;