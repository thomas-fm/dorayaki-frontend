import React, { useState, createContext } from 'react'

export const SidebarContext = createContext()

export const SidebarProvider = (props) => {
    const [open, setOpen] = useState(false)

    return (
        <SidebarContext.Provider value={[open, setOpen]}>
            {props.children}
        </SidebarContext.Provider>
    )
}
