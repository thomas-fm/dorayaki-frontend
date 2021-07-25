import {
    Input,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow,
    InputBase,
    Divider,
    IconButton,
} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import SearchIcon from '@material-ui/icons/Search'
import { StyledTableHeaderRow } from '../components/TableHeader'
// import { StoreGET } from '../api/APIStore'

const useStyles = makeStyles((theme) => ({
    store_table: {
        minWidth: 650,
    },
    store_list: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    input: {
        paddingBottom: 20,
    },
}))

const useInputStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}))

const StoreList = () => {
    const [stores, setStores] = useState([
        {
            id: 1,
            name: 'Apa aja',
            district: 'Serang',
            province: 'Walantaka',
            street: 'Jalan nangka',
        },
    ])
    const [fetch, setFetch] = useState(true)
    const [filter, setFilter] = useState({
        filter: false,
        kecamatan: '',
        provinsi: '',
    })
    const classes = useStyles()
    const inputClasses = useInputStyles()

    useEffect(() => {
        if (fetch) {
            setFetch(false)
            // stores = StoreGET()
            // setStores()
        }
        setFetch(false)
    }, [fetch])
    return (
        <>
            <div className={classes.store_list}>
                <div className="title">
                    <h1>Daftar Cabang Stand with Dorayaki</h1>
                </div>
                <div className={classes.input}>
                    <Paper component="form" className={inputClasses.root}>
                        <InputBase
                            className={inputClasses.input}
                            placeholder="Cari nama tempat"
                            inputProps={{ 'aria-label': 'cari nama tempat' }}
                        />
                        <IconButton
                            type="submit"
                            className={inputClasses.iconButton}
                        >
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </div>
                <div className="store_table">
                    <TableContainer component={Paper}>
                        <Table className={classes.store_table} aria-label>
                            <TableHead>
                                <StyledTableHeaderRow>
                                    <TableCell align="center">Edit</TableCell>
                                    <TableCell align="center">Delete</TableCell>
                                    <TableCell align="right">Toko</TableCell>
                                    <TableCell align="right">
                                        Alamat Jalan
                                    </TableCell>
                                    <TableCell align="right">
                                        Kecamatan
                                    </TableCell>
                                    <TableCell align="right">
                                        Provinsi
                                    </TableCell>
                                </StyledTableHeaderRow>
                            </TableHead>
                            <TableBody>
                                {stores.map((store) => (
                                    <TableRow key={store.id}>
                                        <TableCell align="left">
                                            <IconButton>
                                                <EditIcon />
                                            </IconButton>
                                        </TableCell>
                                        <TableCell align="left">
                                            <IconButton>
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                        <TableCell align="right">
                                            {store.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            {store.street}
                                        </TableCell>
                                        <TableCell align="right">
                                            {store.district}
                                        </TableCell>
                                        <TableCell align="right">
                                            {store.province}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            {/* <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        rowsPerPageOptions={[]}
                                        >
                                        
                                    </TablePagination>
                                </TableRow>
                            </TableFooter> */}
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </>
    )
}

export default StoreList
