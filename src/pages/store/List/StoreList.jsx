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
import { faEthernet, faInfo, faTrash } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import Store from '../../../apis/Store'
import { useHistory } from 'react-router-dom'

// const data = [
//     {
//         name: 'Dorayaki1',
//         street: 'jalan nangka nomor 1',
//         district: 'walantaka',
//         province: 'Banten',
//     },
//     {
//         name: 'Dorayaki2',
//         street: 'jalan nangka nomor 2',
//         district: 'walantaka',
//         province: 'Banten',
//     },
//     {
//         name: 'Dorayaki3',
//         street: 'jalan nangka nomor asdas kd asdja lsk dj asdaj sda la sjd asldk aj laskjd  3',
//         district: 'Serang',
//         province: 'Banten',
//     },
// ]

const StoreList = () => {
    const [data, setData] = useState()
    const [fetch, setFetch] = useState(true)
    let history = useHistory()

    const handleDelete = (i) => {
        Store.delete(i)
        setFetch(true)
        console.log(`delete ${i}`)
    }

    // const handleMove = (i) => {
    //     // pindah page
    //     console.log(`this ${i}`)
    // }

    const movePage = (id) => {
        history.push(`/stocks/${id}`)
    }

    useEffect(() => {
        console.log('test')
        setFetch(true)

        console.log('test2')
        Store.get().then((res) => {
            if (res.data.data) {
                setData(
                    res.data.data.map((el) => {
                        const { id, name, street, district, province } = el
                        return { id, name, street, district, province }
                    }),
                )
            } else {
                console.log('loh kok eror')
            }
        })
        // fetchData()

        console.log('what')
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
                    {data &&
                        data.map((el, i) => (
                            <li className="table-row" key={i}>
                                <div className="col col-1" data-label="Nama">
                                    {el.name}
                                </div>
                                <div className="col col-2" data-label="Jalan">
                                    {el.street}
                                </div>
                                <div
                                    className="col col-3"
                                    data-label="Kecamatan"
                                >
                                    {el.district}
                                </div>
                                <div
                                    className="col col-4"
                                    data-label="Provinsi"
                                >
                                    {el.province}
                                </div>
                                <div className="col col-5" data-label="Aksi">
                                    <IconButton
                                        onClick={() => handleDelete(el.id)}
                                        key={el.id}
                                    >
                                        <FontAwesomeIcon
                                            icon={faTrash}
                                            color={'#373a47'}
                                        />
                                    </IconButton>
                                    <IconButton
                                        onClick={() => movePage(el.id)}
                                        key={`i${el.id}`}
                                    >
                                        <FontAwesomeIcon
                                            icon={faInfo}
                                            color={'#373a47'}
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
