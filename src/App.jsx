import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Sidebar from './layouts/Sidebar'
import StoreList from './pages/StoreList'
import Main from './layouts/Main'
import CustomTheme from './themes/Provider'
import { theme } from './themes/Theme'
import { SidebarProvider } from './context/SidebarContext'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <SidebarProvider>
                <CustomTheme theme={theme}>
                    <Main />
                </CustomTheme>
            </SidebarProvider>
        </>
    )
}

export default App
