import React from 'react'
import { useLocation } from 'react-router-dom'

import { SidebarProvider } from '../../context/SidebarContext'

const SidebarContext = ({ children }) => {
    const { pathName } = useLocation()
    return <SidebarProvider selected={pathName}>{children}</SidebarProvider>
}

export default SidebarContext
