import React, { useContext, useEffect, useState } from 'react'
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
import { SidebarContext } from '../context/SidebarContext'

const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
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
    const classes = useStyles()
    const theme = useTheme()
    const [open, setOpen] = useContext(SidebarContext)
    const [activeMenu, setActiiveMenu] = useState(0)
    const [filter, setFilter] = useState({
        on: false,
        kecamatan: '',
        provinsi: '',
    })

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    const handleClick = (e, i) => {
        setActiiveMenu(i)
    }

    useEffect(() => {}, [filter])

    return (
        <>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(
                            classes.menuButton,
                            open && classes.hide,
                        )}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Stand with Dorayaki
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
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
        </>
    )
}

export default Sidebar
