import React, { useState, createContext, useEffect, useContext } from 'react'

export const SidebarContext = createContext()

export const SidebarProvider = ({ children, selected }) => {
    const [current, setCurrent] = useState(selected)

    useEffect(() => {
        if (selected !== current) {
            return setCurrent(selected)
        }
    }, [current, selected])
    return (
        <SidebarContext.Provider value={{ current, setCurrent }}>
            {children}
        </SidebarContext.Provider>
    )
}

export const useSidebar = ({ item, items = [] } = {}) => {
    const { current, setCurrent } = useContext(SidebarContext)
    const isSelected = item === current || items.includes(current)
    const [expanded, setExpanded] = useState(isSelected)

    useEffect(() => {
        if (!isSelected && expanded) return setExpanded(false)
        if (isSelected && !expanded) return setExpanded(true)
    }, [current])

    const onItemClick = () => {
        setCurrent(item)
    }

    return { isSelected, onItemClick, expanded }
}
