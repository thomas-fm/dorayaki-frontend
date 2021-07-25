import {
    Input,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
// import { StoreGET } from '../api/APIStore'

const useStyles = makeStyles({
    store_list: {
        minWidth: 650,
    },
})
const StoreList = () => {
    const [stores, setStores] = useState()
    const [fetch, setFetch] = useState(true)
    const [filter, setFilter] = useState({
        filter: false,
        kecamatan: '',
        provinsi: '',
    })
    const classes = useStyles()

    useEffect(() => {
        if (fetch) {
            setFetch(false)
            // stores = StoreGET()
            setStores([
                {
                    id: 1,
                    name: "Apa aja",
                    district: "Serang",
                    province: "Walantaka"
                }
            ]) 
        }
    }, [fetch])
    return (
        <>
            <div className="store_list">
                <TableContainer component={Paper}>
                    <Table className={classes.store_list} aria-label>
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">Toko</TableCell>
                                <TableCell align="right">
                                    Alamat Jalan
                                </TableCell>
                                <TableCell align="right">Kecamatan</TableCell>
                                <TableCell align="right">Provinsi</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {stores.map((store) => (
                                <TableRow key={store.id}>
                                    <TableCell>{store.name}</TableCell>
                                    <TableCell>{store.street}</TableCell>
                                    <TableCell>{store.district}</TableCell>
                                    <TableCell>{store.province}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

export default StoreList
