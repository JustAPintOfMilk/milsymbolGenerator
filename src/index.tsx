import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ThemeProvider } from '@mui/material'


import theme from './mui/theme'

const rootId = 'root'
const rootElement = document.createElement('div')
rootElement.id = rootId
document.body.appendChild(rootElement)
const root = ReactDOM.createRoot(rootElement)
root.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
)