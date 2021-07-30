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
    TextField,
} from '@material-ui/core'
import { faEthernet, faInfo, faTrash } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import Store from '../../../apis/Store'
import { useHistory } from 'react-router-dom'

const StoreList = () => {
    const [data, setData] = useState()
    const [fetch, setFetch] = useState(true)
    let history = useHistory()
    const [input, setInput] = useState({
        text: '',
        kecamatan: '',
        provinsi: '',
    })

    const [districts, setDistricts] = useState([])
    const [provinces, setProvinces] = useState([])

    const handleDelete = (i) => {
        Store.delete(i)
        setFetch(true)
        // console.log(`delete ${i}`)
    }

    // const handleMove = (i) => {
    //     // pindah page
    //     console.log(`this ${i}`)
    // }

    const movePage = (id) => {
        history.push(`/stocks/${id}`)
    }

    const handleChange = (event) => {
        event.preventDefault()
        setInput({ ...input, text: event.currentTarget.value })
    }

    const handleSubmit = () => {}
    useEffect(() => {
        setFetch(true)
        let arrStore = []
        Store.get().then((res) => {
            if (res.data.data) {
                setData(
                    res.data.data.map((el) => {
                        const { id, name, street, district, province } = el

                        return { id, name, street, district, province }
                    }),
                )
                arrStore.push(res.data.data)
            } else {
                console.log('loh kok eror')
            }
        })

        console.log(arrStore.length)
        console.log(arrStore)
        setDistricts(
            arrStore.map((val) => {
                let ob = {
                    label: val.district,
                    value: val.district,
                }
                // console.log(ob)
                return ob
            }),
        )
        setProvinces(
            arrStore.map((val) => {
                let ob = {
                    label: val.province,
                    value: val.province,
                }

                return ob
            }),
        )

        console.log('what')
        setFetch(false)
    }, [fetch])
    return (
        <>
            <div className="container">
                <h2>Daftar Toko</h2>
                <div style={{ width: '100%', margin: '20px' }}>
                    <form
                        autoComplete="off"
                        onSubmit={handleSubmit}
                        style={{ width: '100%' }}
                    >
                        <TextField id="search" onChange={handleChange} />
                        <TextField
                            id="kecamatan"
                            select
                            label="Select"
                            value={input.kecamatan}
                            onChange={handleChange}
                            helperText="Pilih Kecamatan"
                        >
                            {districts.map((option) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id="provinsi"
                            select
                            label="Select"
                            value={input.provinsi}
                            onChange={handleChange}
                            helperText="Pilih Provinsi"
                        >
                            {provinces.map((option) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </form>
                </div>
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
