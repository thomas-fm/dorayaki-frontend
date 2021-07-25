import React, { useState } from 'react'
import { sidebarConfig } from '../config/sidebarConfig'

import {
    CssBaseline,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    makeStyles,
    Toolbar,
    useTheme,
    AppBar,
    Divider,
    Typography,
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import { Icon } from '@iconify/react'
import clsx from 'clsx'

const drawerWidth = 200
const useStyles = makeStyles((theme) => ({
    // root: {
    //     display: 'flex',
    // },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(7) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    list_item: {
        backgroundColor: 'red',
        color: 'red',
    },
}))

const Sidebar = () => {
    const theme = useTheme()
    const classes = useStyles()
    const [hide, setHide] = useState(false)
    const [activeMenu, setActiiveMenu] = useState(0)

    const handleDrawerOpen = () => {
        setHide(true)
    }

    const handleDrawerClose = () => {
        setHide(false)
    }

    const handleClick = (e, i) => {
        setActiiveMenu(i)
    }

    return (
        <>
            <div>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: hide,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: hide,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: hide,
                        [classes.drawerClose]: !hide,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: hide,
                            [classes.drawerClose]: !hide,
                        }),
                    }}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? (
                                <ChevronRightIcon />
                            ) : (
                                <ChevronLeftIcon />
                            )}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        {sidebarConfig.map((el, idx) => {
                            return (
                                <ListItem
                                    button
                                    key={el.id}
                                    selected={activeMenu === idx}
                                    onClick={(event) => handleClick(event, idx)}
                                    classes={{
                                        selected: classes.list_item,
                                    }}
                                >
                                    <ListItemAvatar>
                                        <Icon icon={el.icon} />
                                    </ListItemAvatar>
                                    <ListItemText>{el.title}</ListItemText>
                                </ListItem>
                            )
                        })}
                    </List>
                </Drawer>
            </div>
        </>
    )
}

export default Sidebar
