import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { useHistory } from 'react-router-dom'
import theme from '../../resources/theme'
import SidebarItem from './SidebarItem'
import SidebarMenu from './SidebarMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const useStyles = createUseStyles({
    separator: {
        borderTop: ({ theme }) => `1px solid ${theme.color.lightGrayishBlue}`,
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06,
    },
})

const Logo = ({ color, opacity }) => {
    return (
        <FontAwesomeIcon icon="check-square" color={color} opacity={opacity} />
    )
}

const SidebarComponent = () => {
    // const { push } = useHistory()
    const theme = useTheme()
    const classes = useStyles({ theme })
    const isMobile = window.innerWidth <= 1080

    async function logout() {
        // push('/login')
    }

    function onClick(slug, parameters = {}) {
        // push(convertSlugToUrl(slug, parameters));
    }

    return (
        <SidebarMenu isMobile={isMobile}>
            <div style={{ paddingBottom: 30 }}></div>
            <SidebarItem
                id={'/dasboard'}
                title="Dashboard"
                icon={Logo}
                onClick={() => onClick('SLUGS.dashboard')}
            />
            <SidebarItem
                id={'/store'}
                title="Toko"
                icon={Logo}
                onClick={() => onClick('SLUGS.tickets')}
            />
            <SidebarItem
                id={'/variant'}
                title="Variants"
                icon={Logo}
                onClick={() => onClick('SLUGS.contacts')}
            />
            <SidebarItem
                id={'/Tambah'}
                title="Add/Create"
                icon={Logo}
                onClick={() => onClick('SLUGS.agents')}
            />
            <div className={classes.separator}></div>
        </SidebarMenu>
    )
}

export default SidebarComponent
