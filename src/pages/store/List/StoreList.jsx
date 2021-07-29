import React, { useEffect, useMemo, useState } from 'react'
import { useTable } from 'react-table'
import { useTheme, createUseStyles } from 'react-jss'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    Checkbox,
    IconButton,
    Paper,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@material-ui/core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const data = [
    {
        name: 'Dorayaki1',
        street: 'jalan nangka nomor 1',
        district: 'walantaka',
        province: 'Banten',
    },
    {
        name: 'Dorayaki2',
        street: 'jalan nangka nomor 2',
        district: 'walantaka',
        province: 'Banten',
    },
    {
        name: 'Dorayaki3',
        street: 'jalan nangka nomor asdas kd asdja lsk dj asdaj sda la sjd asldk aj laskjd  3',
        district: 'Serang',
        province: 'Banten',
    },
]

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
    const handleDelete = (i) => {
        // call api
        setFetch(true)
        console.log(`delete ${i}`)
    }

    const handleMove = (i) => {
        // pindah page
        console.log(`this ${i}`)
    }
    useEffect(() => {
        if (fetch) {
            // call api
        }
        setFetch(false)
    }, [fetch])
    return (
        <>
            <div className="container">
                <h2>Daftar Toko</h2>
                <div></div>
                <ul className="responsive-table">
                    <li className="table-header">
                        <div className="col col-1">Nama</div>
                        <div className="col col-2">Alamat</div>
                        <div className="col col-3">Kecamatan</div>
                        <div className="col col-4">Provinsi</div>
                        <div className="col col-5"></div>
                    </li>
                    {data.map((el, i) => (
                        <li
                            className="table-row"
                            key={i}
                            onClick={() => handleMove(i)}
                        >
                            <div className="col col-1" data-label="Nama">
                                {el.name}
                            </div>
                            <div className="col col-2" data-label="Jalan">
                                {el.street}
                            </div>
                            <div className="col col-3" data-label="Kecamatan">
                                {el.district}
                            </div>
                            <div className="col col-4" data-label="Provinsi">
                                {el.province}
                            </div>
                            <div className="col col-5" data-label="">
                                <IconButton
                                    onClick={() => handleDelete(i)}
                                    key={i}
                                >
                                    <FontAwesomeIcon
                                        icon={faTrash}
                                        color={'#3498db'}
                                    />
                                </IconButton>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default StoreList
