import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Sidebar from './layouts/Sidebar'
import StoreList from './pages/StoreList'
import Main from './layouts/Main'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            {/* <Sidebar/> */}
            <Main />
            <p>Test</p>
        </>
    )
}

export default App
