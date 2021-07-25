import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Sidebar from './layouts/Sidebar'
import StoreList from './pages/StoreList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Sidebar/> */}
      <StoreList/>
    </div>
  )
}

export default App
