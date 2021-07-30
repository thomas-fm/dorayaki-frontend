import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { useHistory } from 'react-router-dom'
import theme from '../../resources/theme'
import SidebarItem from './SidebarItem'
import SidebarMenu from './SidebarMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBoxes,
    faPlus,
    faSquare,
    faStore,
} from '@fortawesome/free-solid-svg-icons'

const useStyles = createUseStyles({
    separator: {
        borderTop: ({ theme }) => `1px solid ${theme.color.lightGrayishBlue}`,
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06,
    },
})

const Dashboard = ({ color, opacity }) => {
    return <FontAwesomeIcon icon={faSquare} color={color} opacity={opacity} />
}

const Store = ({ color, opacity }) => {
    return <FontAwesomeIcon icon={faStore} color={color} opacity={opacity} />
}

const Variant = ({ color, opacity }) => {
    return <FontAwesomeIcon icon={faBoxes} color={color} opacity={opacity} />
}

const Plus = ({ color, opacity }) => {
    return <FontAwesomeIcon icon={faPlus} color={color} opacity={opacity} />
}

const SidebarComponent = () => {
    // const { push } = useHistory()
    const theme = useTheme()
    const classes = useStyles({ theme })
    const isMobile = window.innerWidth <= 1080
    let hist = useHistory()

    async function logout() {
        // push('/login')
    }

    const onClick = (path) => {
        // push(convertSlugToUrl(slug, parameters));
        // hist.push(e)
        hist.push(path)
    }

    return (
        <SidebarMenu isMobile={isMobile}>
            <div style={{ paddingBottom: 30 }}>Stand with Dorayaki</div>
            <SidebarItem
                id={'dasboard'}
                title="Dashboard"
                icon={Dashboard}
                onClick={() => onClick('/dashboard')}
            />
            <SidebarItem
                id={'store'}
                title="Toko"
                icon={Store}
                onClick={() => onClick('/stores')}
            />
            <SidebarItem
                id={'variant'}
                title="Variants"
                icon={Variant}
                onClick={() => onClick('/variants')}
            />
            <SidebarItem
                id={'tambah'}
                title="Add/Create"
                icon={Plus}
                onClick={() => onClick('SLUGS.agents')}
            />
            <div className={classes.separator}></div>
        </SidebarMenu>
    )
}

export default SidebarComponent
