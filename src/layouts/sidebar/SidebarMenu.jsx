import React, { useState } from 'react'
import { useTheme } from 'react-jss'
import { slide as Menu } from 'react-burger-menu'

const getMenuStyles = ({ theme }) => ({
    bmBurgerButton: {
        position: 'absolute',
        width: 26,
        height: 20,
        left: 30,
        top: 40,
        zIndex: 19,
    },
    bmBurgerBars: {
        background: theme.color.veryDarkGrayishBlue,
    },
    bmBurgerBarsHover: {
        background: theme.color.darkRed,
    },
    bmCrossButton: {
        display: 'none',
    },
    bmCross: {
        background: theme.color.grayishBlue3,
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%',
        width: 255,
        zIndex: 30,
    },
    bmMenu: {
        background: theme.color.veryDarkGrayishBlue,
    },
    bmItem: {
        outline: 'none',
        '&:focus': {
            outline: 'none',
        },
    },
    bmMorphShape: {
        fill: theme.color.veryDarkGrayishBlue,
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)',
        zIndex: 20,
    },
})

const SidebarMenu = ({ children, isMobile }) => {
    const theme = useTheme()
    const styles = getMenuStyles({ theme })
    const [open, setOpen] = useState(false)

    return (
        <>
            <Menu
                isOpen={!isMobile || open}
                disableCloseOnEsc
                styles={styles}
                onStateChange={(state) => setOpen(state.isOpen)}
                noOverlay={!isMobile}
            >
                {children}
            </Menu>
        </>
    )
}

export default SidebarMenu
