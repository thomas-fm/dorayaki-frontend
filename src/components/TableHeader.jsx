import { TableCell, TableRow, withStyles } from '@material-ui/core'
import React from 'react'

export const StyledTableHeaderRow = withStyles({
    root: {
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        '&:first-child': {
            borderRadius: '40px',
        },
    },
    head: {
        borderRadius: '40px',
        '&:first-child': {
            borderRadius: '40px',
        },
    },
})(TableRow)
