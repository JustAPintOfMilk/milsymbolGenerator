import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

const theme = createTheme({
    palette: {
        primary: {
            main: '#3c3c3c'
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