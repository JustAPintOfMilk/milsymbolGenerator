import React from 'react'
import ms from 'milsymbol'
import Version from './selections/Version'
import Status from './selections/Status'
import HQ from './selections/HQ'
import Descriptor from './selections/Descriptor'
import { Divider, Paper, Typography, Button, Accordion, AccordionSummary, AccordionDetails, Alert, TextField, Snackbar } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DEFAULTSIDC } from './defaults'
import SymbolSelection from './selections/SymbolSelection/SymbolSelection'
import Hostility from './selections/StandardItentity/Hostility'
import Context from './selections/StandardItentity/Context'
import NumericValuePicker from './selections/pickers/NumericValuePicker'

const App = () => {
    const [hasCopied, setCopied] = React.useState(false)
    const [options, setOptions] = React.useState({
        size: 50,
        additionalInformation: "",
        altitudeDepth: "",
        combatEffectiveness: "",
        commonIdentifier: "",
        country: "",
        direction: "",
        dtg: "",
        engagementBar: "",
        engagementType: "",
        equipmentTeardownTime: "",
        evaluationRating: "",
        guardedUnit: "",
        headquartersElement: "",
        higherFormation: "",
        hostile: "",
        iffSif: "",
        location: "",
        platformType: "",
        quantity: "",
        reinforcedReduced: "",
        sigint: "",
        specialDesignator: "",
        signatureEquipment: "",
        specialHeadquarters: "",
        speed: "",
        speedLeader: 0,
        staffComments: "",
        targetNumber: "",
        type: "",
        uniqueDesignation: ""
    })
    const [sidc, setState] = React.useState(DEFAULTSIDC)
    const setStateAt = (index: number, state: string) => {
        const newSIDC = sidc.length > index ?
            sidc.substring(0, index) + state + sidc.substring(index + state.length)
            : sidc.padEnd(index, "0") + state
        setState(newSIDC)
    }
    const symbol = new ms.Symbol(sidc, {
        ...options
    })
    const symbolUrl = symbol.asCanvas().toDataURL()
    const blob = new Blob([symbol.asSVG()], { type: "image/svg+xml;charset=utf-8" })
    const svgUrl = URL.createObjectURL(blob)
    return (
        <Paper className="App" >
            <div className="leftSidebar">
                <div className='milSymbolPreview'>
                    <img src={symbolUrl} />
                    <div className="column">
                        <Button onClick={() => {
                            navigator.clipboard.writeText(sidc)
                            setCopied(true)
                        }}>{sidc}</Button>
                        <Snackbar open={hasCopied} onClose={() => setCopied(false)} autoHideDuration={3000}>
                            <Alert severity="info">Copied</Alert>
                        </Snackbar>
                        <Paper className="row">
                            <a href={svgUrl} download={`${sidc}.svg`} target='_blank' className='grow'>
                                <Button fullWidth>SVG</Button>
                            </a>
                            <a href={symbolUrl} download={`${sidc}.png`} target='_blank' className='grow'>
                                <Button fullWidth>PNG</Button>
                            </a>
                        </Paper>
                    </div>
                </div>
            </div>
            <div className="selections">
                <Version part={sidc.substring(0, 2)} setter={(part) => setStateAt(0, part)} />
                <Divider />
                <SymbolSelection
                    set={sidc.substring(4, 6)} setSetter={(part) => setStateAt(4, part)}
                    entity={sidc.substring(10, 16)} entitySetter={(part) => setStateAt(10, part)}
                    mod1={sidc.substring(16, 18)} mod1Setter={(part) => setStateAt(16, part)}
                    mod2={sidc.substring(18, 20)} mod2Setter={(part) => setStateAt(18, part)} />
                <Divider />
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Details</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="row wrap">
                        <div className="marginAuto">
                            <Typography align='center'>Context</Typography>
                            <Context part={sidc.charAt(2)} setter={(part) => setStateAt(2, part)} />
                        </div>
                        <div className="marginAuto">
                            <Typography align='center'>Hostility</Typography>
                            <Hostility part={sidc.charAt(3)} setter={(part) => setStateAt(3, part)} />
                        </div>
                        <div className="marginAuto">
                            <Typography align='center'>Descriptor</Typography>
                            <Descriptor part={sidc.substring(8, 10)} setter={(part) => setStateAt(8, part)} />
                        </div>
                        <div className="marginAuto">
                            <Typography align='center'>HQ</Typography>
                            <HQ part={sidc.charAt(7)} setter={(part) => setStateAt(7, part)} />
                        </div>
                        <div className="marginAuto">
                            <Typography align='center'>Status</Typography>
                            <Status part={sidc.charAt(6)} setter={(part) => setStateAt(6, part)} />
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Modifiers & Textfields</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="column" >
                        <div className="row">
                            <div className="marginAuto">
                                <NumericValuePicker value={options.size} setValue={(value: number) => setOptions({ ...options, size: value })} min={50} max={200} title="Size" />
                            </div>
                        </div>
                        <div className="column">
                            <TextField label="AdditionalInformation" type="text"
                                inputProps={{ maxLength: 20 }}
                                value={options?.additionalInformation || ""}
                                onChange={e => setOptions({ ...options, additionalInformation: e.target.value })} />
                            <TextField label="Altitude/depth" type="text"
                                inputProps={{ maxLength: 14 }}
                                value={options?.altitudeDepth || ""}
                                onChange={e => setOptions({ ...options, altitudeDepth: e.target.value })} />
                            <TextField label="Combat Effectiveness" type="text"
                                inputProps={{ maxLength: 5 }}
                                value={options?.combatEffectiveness || ""}
                                onChange={e => setOptions({ ...options, combatEffectiveness: e.target.value })} />
                            <TextField label="Common Identifier" type="text"
                                value={options?.commonIdentifier || ""}
                                onChange={e => setOptions({ ...options, commonIdentifier: e.target.value })} />
                            <TextField label="Country" type="text"
                                inputProps={{ maxLength: 3 }}
                                value={options?.country || ""}
                                onChange={e => setOptions({ ...options, country: e.target.value })} />
                            <Paper className='column full'>
                                <Typography variant='h6' align='center'>Movement</Typography>
                                <div className='row wrap'>
                                    <div className="marginAuto">
                                        <NumericValuePicker clear={() => setOptions({ ...options, direction: "" })} value={Number(options.direction)} setValue={(value: number) => setOptions({ ...options, direction: value.toString() })} min={0} max={359} title="Direction" />
                                    </div>
                                    <div className="marginAuto">
                                        <TextField label="Speed" type="text"
                                            inputProps={{ maxLength: 8 }}
                                            value={options?.speed || ""}
                                            onChange={e => setOptions({ ...options, speed: e.target.value })} />
                                    </div>
                                    <div className="marginAuto">
                                        <NumericValuePicker
                                            title="Speed Leader in px"
                                            min={0}
                                            max={2000}
                                            value={options?.speedLeader || 0}
                                            setValue={(value: number) => setOptions({ ...options, speedLeader: value })} />
                                    </div>
                                </div>
                            </Paper>
                            <TextField label="DTG" type="text"
                                inputProps={{ maxLength: 16 }}
                                value={options?.dtg || ""}
                                onChange={e => setOptions({ ...options, dtg: e.target.value })} />
                            <TextField label="EngagementBar" type="text"
                                value={options?.engagementBar || ""}
                                onChange={e => setOptions({ ...options, engagementBar: e.target.value })} />
                            <TextField label="EngagementType" type="text"
                                value={options?.engagementType || ""}
                                onChange={e => setOptions({ ...options, engagementType: e.target.value })} />
                            <TextField label="Equipment Teardown Time" type="text"
                                value={options?.equipmentTeardownTime || ""}
                                onChange={e => setOptions({ ...options, equipmentTeardownTime: e.target.value })} />
                            <TextField label="Evaluation Rating" type="text"
                                inputProps={{ maxLength: 2 }}
                                value={options?.evaluationRating || ""}
                                onChange={e => setOptions({ ...options, evaluationRating: e.target.value })} />
                            <TextField label="Guarded Unit" type="text"
                                inputProps={{ maxLength: 2 }}
                                value={options?.guardedUnit || ""}
                                onChange={e => setOptions({ ...options, guardedUnit: e.target.value })} />
                            <TextField label="Headquarters Element" type="text"
                                value={options?.headquartersElement || ""}
                                onChange={e => setOptions({ ...options, headquartersElement: e.target.value })} />
                            <TextField label="Higher Formation" type="text"
                                inputProps={{ maxLength: 21 }}
                                value={options?.higherFormation || ""}
                                onChange={e => setOptions({ ...options, higherFormation: e.target.value })} />
                            <TextField label="Hositle" type="text"
                                inputProps={{ maxLength: 3 }}
                                value={options?.hostile || ""}
                                onChange={e => setOptions({ ...options, hostile: e.target.value })} />
                            <TextField label="iffSif" type="text"
                                inputProps={{ maxLength: 5 }}
                                value={options?.iffSif || ""}
                                onChange={e => setOptions({ ...options, iffSif: e.target.value })} />
                            <TextField label="location" type="text"
                                inputProps={{ maxLength: 19 }}
                                value={options?.location || ""}
                                onChange={e => setOptions({ ...options, location: e.target.value })} />
                            <TextField label="Platform Type" type="text"
                                value={options?.platformType || ""}
                                onChange={e => setOptions({ ...options, platformType: e.target.value })} />
                            <TextField label="Quantity" type="text"
                                inputProps={{ maxLength: 9 }}
                                value={options?.quantity || ""}
                                onChange={e => setOptions({ ...options, quantity: e.target.value })} />
                            <TextField label="Reinforced Reduced" type="text"
                                inputProps={{ maxLength: 3 }}
                                value={options?.reinforcedReduced || ""}
                                onChange={e => setOptions({ ...options, reinforcedReduced: e.target.value })} />
                            <TextField label="sigint" type="text"
                                value={options?.sigint || ""}
                                onChange={e => setOptions({ ...options, sigint: e.target.value })} />
                            <TextField label="Special Designator" type="text"
                                inputProps={{ maxLength: 3 }}
                                value={options?.specialDesignator || ""}
                                onChange={e => setOptions({ ...options, specialDesignator: e.target.value })} />
                            <TextField label="Signature Equipment" type="text"
                                inputProps={{ maxLength: 1 }}
                                value={options?.signatureEquipment || ""}
                                onChange={e => setOptions({ ...options, signatureEquipment: e.target.value })} />
                            <TextField label="Special Headquarters" type="text"
                                inputProps={{ maxLength: 9 }}
                                value={options?.specialHeadquarters || ""}
                                onChange={e => setOptions({ ...options, specialHeadquarters: e.target.value })} />
                            <TextField label="Staff Comments" type="text"
                                inputProps={{ maxLength: 20 }}
                                value={options?.staffComments || ""}
                                onChange={e => setOptions({ ...options, staffComments: e.target.value })} />
                            <TextField label="Target Number" type="text"
                                inputProps={{ maxLength: 6 }}
                                value={options?.targetNumber || ""}
                                onChange={e => setOptions({ ...options, targetNumber: e.target.value })} />
                            <TextField label="Type" type="text"
                                inputProps={{ maxLength: 24 }}
                                value={options?.type || ""}
                                onChange={e => setOptions({ ...options, type: e.target.value })} />
                            <TextField label="Unique Designation" type="text"
                                inputProps={{ maxLength: 21 }}
                                value={options?.uniqueDesignation || ""}
                                onChange={e => setOptions({ ...options, uniqueDesignation: e.target.value })} />

                        </div>
                    </AccordionDetails>
                </Accordion>

                {/* unused
                <Divider />
                <SymbolOrigIdentifier part={sidc.substring(20, 23)} setter={(part) => setStateAt(20, part)} />
                <SymbolOrigIdentifier part={sidc.charAt(23)} setter={(part) => setStateAt(23, part)} length={1} />
                <SymbolOrigIdentifier part={sidc.substring(24, 30)} setter={(part) => setStateAt(24, part)} length={6} /> */}
            </div>
        </Paper >
    )
}

export default App
