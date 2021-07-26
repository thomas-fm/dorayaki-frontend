import React from 'react'
import { ThemeProvider } from '@material-ui/styles'

function CustomTheme(props) {
    const { theme } = props
    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export default CustomTheme
