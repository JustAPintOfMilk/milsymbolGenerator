import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

const theme = createTheme({
    palette: {
        primary: {
            main: '#333333',
            light: '#333333',
            contrastText: '#fff',
        },
        secondary: {
            main: '#fafafa'
        },
        error: {
            main: red[600]
        },
    }
})

export default theme;