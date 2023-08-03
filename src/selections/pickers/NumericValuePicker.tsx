import * as React from 'react';
import { Paper, Typography, Slider, TextField, Button } from "@mui/material";

type sizeOptions = {
    value: number,
    setValue: Function,
    min: number,
    max: number,
    title: string,
    clear?: Function,
    step?: number
}
const NumericValuePicker = ({ value, setValue, step = 1, min, max, title, clear }: sizeOptions): JSX.Element => <Paper>
    <Typography>{title}</Typography>
    <Slider
        value={value}
        step={step}
        valueLabelDisplay="auto"
        marks={[{ value: min, label: min }, { value: max, label: max }]}
        onChange={(_, value) => setValue(value as number)}
        min={min}
        max={max}
    />
    <div className='row'>
        <TextField fullWidth value={value} type="number" onChange={e => !isNaN(Number(e.target.value)) && setValue(parseInt(e.target.value))} InputProps={{ inputProps: { min: min, max: max } }} />
        <Button onClick={() => {
            if (clear) {
                clear()
            } else {
                setValue(min)
            }
        }}>Clear</Button>
    </div>
</Paper >
export default NumericValuePicker;

