import React, { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
// import Sidebar from './layouts/Sidebar'
// import StoreList from './pages/StoreList'
// import Main from './layouts/Main'
// import CustomTheme from './themes/Provider'
import { ThemeProvider } from 'react-jss'
import theme from './resources/theme'
import SidebarComponent from './layouts/sidebar/Sidebar'
import { SidebarContext } from './context/SidebarContext'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <SidebarContext>
                <ThemeProvider theme={theme}>
                    <SidebarComponent />
                </ThemeProvider>
            </SidebarContext>
        </>
    )
}

export default App
