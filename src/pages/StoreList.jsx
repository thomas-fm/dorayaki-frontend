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
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Grid,
} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import SearchIcon from '@material-ui/icons/Search'
// import { StoreGET } from '../api/APIStore'

const useStyles = makeStyles((theme) => ({
    store_table: {
        minWidth: 650,
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        fontWeight: 'bold',
        width: '100%',
        '& > *': {
            fontFamily: ['Poppins', 'sans-serif'].join(','),
        },
    },
    store_list: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& .MuiPaper-rounded': {
            borderRadius: '15px',
        },
        width: '100%',
        // overflowX: 'auto',
        padding: theme.spacing(3),
    },
    table_container: {
        overflowX: 'auto',
        tableLayout: 'fixed',
        width: '100%',
        margin: 0,
    },
    header: {
        fontWeight: 'bold',
        background: '#f5f5f5',
        '& > *': {
            fontWeight: 'bold',
            fontSize: '1.05rem',
            color: '#263238',
        },
    },
    root: {
        fontFamily: ['Poppins', 'sans-serif'].join(','),
    },
    title: {
        width: '100%',
        float: 'left',
    },
    nama: {
        width: 200,
    },
    icon_container: {
        width: theme.spacing(10),
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
            street: 'Jalan nangasdasdasdas asdasd asdasdas akkkkkkk kkkkkkkk kkkkkkkkk kkkkkkkkkk kkkk kkkkkkkksd ka',
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
    const handleChange = (e) => {}
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
                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <Grid item xs></Grid>
                    <Grid item xs></Grid>
                    <Grid item xs></Grid>
                </Grid>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                    }}
                >
                    <div className={classes.title}>
                        <h1>Toko</h1>
                    </div>
                    <div className={classes.input}>
                        <Paper component="form" className={inputClasses.root}>
                            <InputBase
                                className={inputClasses.input}
                                placeholder="Cari nama tempat"
                                inputProps={{
                                    'aria-label': 'cari nama tempat',
                                }}
                            />
                            <IconButton
                                type="submit"
                                className={inputClasses.iconButton}
                            >
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            padding: 2,
                        }}
                    >
                        <Button variant="contained" color="primary">
                            Tambah
                        </Button>
                        <Button variant="contained" color="primary">
                            Simpan
                        </Button>
                    </div>
                </div>
                <div
                    style={{
                        width: '30%',
                    }}
                >
                    <FormControl style={{ minWidth: 120 }}>
                        <InputLabel>Kecamatan</InputLabel>
                        <Select
                            value={filter.kecamatan}
                            onChange={handleChange}
                        >
                            <MenuItem value="walantaka">Walantaka</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl style={{ minWidth: 120 }}>
                        <InputLabel>Provinsi</InputLabel>
                        <Select
                            value={filter.kecamatan}
                            onChange={handleChange}
                        >
                            <MenuItem value="walantaka">Walantaka</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="store_table" style={{ overflowX: 'auto' }}>
                    <TableContainer
                        component={Paper}
                        className={classes.store_table}
                    >
                        <Table aria-label className={classes.table_container}>
                            <TableHead>
                                <TableRow className={classes.header}>
                                    <TableCell
                                        align="left"
                                        className={classes.nama}
                                    >
                                        Nama
                                    </TableCell>
                                    <TableCell align="left">
                                        Alamat Jalan
                                    </TableCell>
                                    <TableCell align="left">
                                        Kecamatan
                                    </TableCell>
                                    <TableCell align="left">Provinsi</TableCell>
                                    <TableCell
                                        align="center"
                                        className={classes.icon_container}
                                    >
                                        Edit
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        className={classes.icon_container}
                                    >
                                        Delete
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {stores.map((store) => (
                                    <TableRow key={store.id}>
                                        <TableCell align="left">
                                            {store.name}
                                        </TableCell>
                                        <TableCell align="left">
                                            {store.street}
                                        </TableCell>
                                        <TableCell align="left">
                                            {store.district}
                                        </TableCell>
                                        <TableCell align="left">
                                            {store.province}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            className={classes.icon_container}
                                        >
                                            <IconButton>
                                                <EditIcon />
                                            </IconButton>
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            className={classes.icon_container}
                                        >
                                            <IconButton>
                                                <DeleteIcon />
                                            </IconButton>
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
