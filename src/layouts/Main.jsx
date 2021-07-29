import {
    Container,
    CssBaseline,
    makeStyles,
    Typography,
} from '@material-ui/core'
import React, { useContext } from 'react'
import Sidebar from './Sidebar'
import { Body } from './Body'
import clsx from 'clsx'
import { SidebarContext, SidebarProvider } from '../context/SidebarContext'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
}))
const Main = () => {
    const classes = useStyles()
    const [open, setOpen] = useContext(SidebarContext)
    return <Sidebar />
}

export default Main
