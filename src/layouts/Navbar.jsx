import React, { useContext } from 'react'
import { string } from 'prop-types'
import { useHistory } from 'react-router-dom'
import { Row } from 'simple-flexbox'
import { createUseStyles, useTheme } from 'react-jss'
import { SidebarContext } from '../context/SidebarContext'
import URL from '../resources/url'

const useStyles = createUseStyles((theme) => ({
    avatar: {
        height: 35,
        width: 35,
        minWidth: 35,
        borderRadius: 50,
        marginLeft: 14,
        border: `1px solid ${theme.color.lightGrayishBlue2}`,
        '@media (max-width: 768px)': {
            marginLeft: 14,
        },
    },
    container: {
        height: 40,
    },
    name: {
        ...theme.typography.itemTitle,
        textAlign: 'right',
        '@media (max-width: 768px)': {
            display: 'none',
        },
    },
    separator: {
        borderLeft: `1px solid ${theme.color.lightGrayishBlue2}`,
        marginLeft: 32,
        marginRight: 32,
        height: 32,
        width: 2,
        '@media (max-width: 768px)': {
            marginLeft: 14,
            marginRight: 0,
        },
    },
    title: {
        ...theme.typography.title,
        '@media (max-width: 1080px)': {
            marginLeft: 50,
        },
        '@media (max-width: 468px)': {
            fontSize: 20,
        },
    },
    iconStyles: {
        cursor: 'pointer',
        marginLeft: 25,
        '@media (max-width: 768px)': {
            marginLeft: 12,
        },
    },
}))

const Nav = () => {
    const theme = useTheme()
    const classes = useStyles({ theme })
    const { current } = useContext(SidebarContext)
    // const { push } = useHistory()

    let title

    if (current === URL.store) title = 'Store'
    if (current === URL.dashboard) title = 'Dashboard'
    if (current === URL.variant) title = 'Variant'
    else {
        title = ' '
    }

    return (
        <Row
            className={classes.container}
            vertical="center"
            horizontal="space-between"
        >
            <span className={classes.title}>{title}</span>
            <Row vertical="center">
                <div className={classes.separator}></div>
                <div>
                    <span>Admin</span>
                </div>
            </Row>
        </Row>
    )
}

export default Nav
