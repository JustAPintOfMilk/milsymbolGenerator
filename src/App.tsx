import React from 'react'
import ms from 'milsymbol'
import Version from './selections/Version'
import StandardIdentity from './selections/StandardIdentity'
import Status from './selections/Status'
import HQ from './selections/HQ'
import Descriptor from './selections/Descriptor'
import { Divider } from '@mui/material'
import SymbolOrigIdentifier from './selections/SymbolOrigIdentifier'
import { DEFAULTSIDC } from './defaults'
import SymbolSelection from './selections/SymbolSelection/SymbolSelection'

const App = () => {
    const [sidc, setState] = React.useState(DEFAULTSIDC)
    const setStateAt = (index: number, state: string) => {
        console.log(index, state)
        const newSIDC = sidc.length > index ?
            sidc.substring(0, index) + state + sidc.substring(index + state.length)
            : sidc.padEnd(index - 1, "0") + state
        setState(newSIDC)
    }
    const symbolUrl = new ms.Symbol(sidc, {
        size: 100
    }).asCanvas().toDataURL()
    return (
        <div className="App" >
            <div className='milSymbolPreview'>
                <img src={symbolUrl} />
            </div>
            <div className="selections">
                <Version part={sidc.substring(0, 2)} setter={(part) => setStateAt(0, part)} />
                <StandardIdentity part={sidc.substring(2, 4)} setter={(part) => setStateAt(2, part)} />
                <Divider />
                <SymbolSelection
                    set={sidc.substring(4, 6)} setSetter={(part) => setStateAt(4, part)}
                    entity={sidc.substring(10, 16)} entitySetter={(part) => setStateAt(10, part)}
                    mod1={sidc.substring(16, 18)} mod1Setter={(part) => setStateAt(16, part)}
                    mod2={sidc.substring(18, 20)} mod2Setter={(part) => setStateAt(18, part)} />
                <Divider />
                <Status part={sidc.charAt(6)} setter={(part) => setStateAt(6, part)} />
                <HQ part={sidc.charAt(7)} setter={(part) => setStateAt(7, part)} />
                <Descriptor part={sidc.substring(8, 10)} setter={(part) => setStateAt(8, part)} />

                <Divider />
                <SymbolOrigIdentifier part={sidc.substring(20, 23)} setter={(part) => setStateAt(20, part)} />
                <SymbolOrigIdentifier part={sidc.charAt(23)} setter={(part) => setStateAt(23, part)} />
                <SymbolOrigIdentifier part={sidc.substring(24, 29)} setter={(part) => setStateAt(24, part)} />
            </div>
        </div>
    )
}

export default App
