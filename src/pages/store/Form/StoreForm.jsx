import React, { useEffect, useState } from 'react'
import { Button, Tabs } from 'antd'
import { useParams } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconButton } from '@material-ui/core'
import {
    faEdit,
    faTrash,
    faExchangeAlt,
} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import Stock from '../../../apis/Stock'
import Store from '../../../apis/Store'
import Variant from '../../../apis/Variant'
import Select from 'react-select'
// const data = [
//     {
//         id: 1,
//         name: 'Thomas',
//         quantity: 100,
//     },
//     {
//         id: 2,
//         name: 'Thomas3',
//         quantity: 100,
//     },
//     {
//         id: 3,
//         name: 'Thomas4',
//         quantity: 100,
//     },
//     {
//         id: 4,
//         name: 'Thomas5',
//         quantity: 100,
//     },
// ]
const StoreForm = () => {
    const callback = (key) => {
        console.log(key)
    }
    let { id } = useParams()
    let storeID = id
    const [store, setStore] = useState({
        id: '',
        name: '',
        province: '',
        street: '',
        district: '',
    })
    const [fetch, setFetch] = useState(true)
    const [stock, setStock] = useState()
    const [dorayaki, setDorayaki] = useState()
    const [input, setInput] = useState({
        id: 0,
        name: '',
        quantity: 0,
    })
    const [update, setUpdate] = useState(false)
    const [allStore, setAllStore] = useState([])
    const [onTransfer, setOnTransfer] = useState(false)
    const [selectedStore, setSelectedStore] = useState({
        value: '',
        label: '',
    })
    const [curStock, setCurStock] = useState(0)

    const handleEdit = (idx) => {
        setOnTransfer(false)
        let d = dorayaki.find((x) => x.id === idx)
        let q = stock.find((x) => x.variant_id === idx)
        setInput({
            id: idx,
            name: d.flavour,
            quantity: q.total,
        })
        setUpdate(true)
    }

    const handleTransfer = (id) => {
        setUpdate(false)
        console.log(allStore)
        let d = dorayaki.find((x) => x.id === id)
        let q = stock.find((x) => x.variant_id === id)
        setInput({
            id: id,
            name: d.flavour,
            quantity: q.total,
        })
        setCurStock(q.total)
        setOnTransfer(true)
        console.log(id)
    }

    const handleChange = (event) => {
        console.log(event.currentTarget.key)
    }

    const handleSelectChange = (selectedOption) => {
        const { value, label } = selectedOption
        setSelectedStore({
            value,
            label,
        })
        console.log(selectedOption)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (onTransfer) {
            let prevStock = stock.find((x) => x.variant_id == input.id).total
            let transferStock = input.quantity
            let sisa = prevStock - transferStock

            if (sisa === 0) {
                //delet
            } else {
                //update
                // cek if sudah ada di database
                // kalau belum
            }
        } else if (update) {
        }
    }

    useEffect(() => {
        if (fetch) {
            // get store data
            let arrDorayaki
            let curStore
            Store.getById(id).then((res) => {
                console.log(res.data.data)
                const { id, name, street, district, province } = res.data.data
                curStore = id
                setStore({
                    id,
                    name,
                    street,
                    province,
                    district,
                })
            })

            // get all store
            Store.get().then((res) => {
                let filterArray = res.data.data.filter((x) => x.id !== curStore)
                setAllStore(
                    filterArray.map((el) => {
                        const { id, name } = el
                        let value = id
                        let label = name

                        return { value, label }
                    }),
                )
            })
            // get variant data
            Variant.get().then((res) => {
                console.log(res.data.data)
                arrDorayaki = res.data.data
                setDorayaki(
                    res.data.data.map((el) => {
                        const { flavour, id } = el

                        return { id, flavour }
                    }),
                )

                Stock.get(id).then((resp) => {
                    // console.log(resp.data.data[0])
                    // console.log(dorayaki)
                    // console.log(store)
                    // console.log(arrDorayaki)
                    // console.log('nani')
                    setStock(
                        resp.data.data.map((el) => {
                            const { variant_id, total } = el
                            let d = arrDorayaki.find((x) => x.id == variant_id)
                            let flavour = d.flavour

                            return { variant_id, flavour, total }
                        }),
                    )
                })
            })
            console.log(dorayaki)
            setFetch(false)
        }

        if (update) {
            setUpdate(false)
        }
    }, [update, fetch])
    return (
        <>
            <div className="parent">
                <div className="container-store">
                    <div className="store-info">
                        <h2>Deskripsi Toko</h2>

                        <ul style={{ padding: 0 }}>
                            <li>
                                <div className="col-1">Nama</div>
                                <label>{store.name}</label>
                            </li>
                            <li>
                                <div className="col-1">Alamat</div>
                                <label>{store.street}</label>
                            </li>
                            <li>
                                <div className="col-1">Kecamatan</div>
                                <label>{store.district}</label>
                            </li>
                            <li>
                                <div className="col-1">Provinsi</div>
                                <label>{store.province}</label>
                            </li>
                        </ul>
                    </div>
                    <div className="store-stock">
                        <ul style={{ padding: 0 }}>
                            <li>
                                <div>Dorayaki</div>
                                <input
                                    value={input.name}
                                    onChange={handleChange}
                                    key="quantity"
                                    disabled
                                />
                            </li>
                            <li>
                                <div>Quantity</div>
                                {!onTransfer && !update && <input value={0} />}
                                {(onTransfer && (
                                    <input
                                        value={input.quantity}
                                        onChange={handleChange}
                                        key="quantity"
                                        min={0}
                                        max={curStock}
                                    />
                                )) ||
                                    (update && (
                                        <input
                                            value={input.quantity}
                                            onChange={handleChange}
                                            key="quantity"
                                            min={0}
                                        />
                                    ))}
                            </li>
                            <li>
                                {onTransfer && (
                                    <>
                                        <div>Toko Tujuan</div>
                                        <Select
                                            value={selectedStore}
                                            options={allStore}
                                            onChange={handleSelectChange}
                                        />
                                    </>
                                )}
                            </li>
                            <li>
                                <Button onClick={handleSubmit}>Submit</Button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="stock-table">
                    <ul style={{ padding: 0 }}>
                        <li className="header">
                            <div style={{ padding: '12px' }} className="col-1">
                                <h3>
                                    <small>Variant</small>
                                </h3>
                            </div>
                            <div style={{ padding: '12px' }} className="col-2">
                                <h3>
                                    <small>Quantity</small>
                                </h3>
                            </div>
                            <div style={{ padding: '12px' }} className="col-5">
                                <h3>
                                    <small>Aksi</small>
                                </h3>
                            </div>
                        </li>
                        {stock &&
                            stock.map((e) => (
                                <li key={e.variant_id}>
                                    <div className="col col-1">{e.flavour}</div>
                                    <div className="col col-2">{e.total}</div>
                                    <div className="col col-3">
                                        <IconButton
                                            onClick={() =>
                                                handleEdit(e.variant_id)
                                            }
                                        >
                                            <FontAwesomeIcon icon={faEdit} />
                                        </IconButton>
                                    </div>
                                    <div className="col col-4">
                                        <IconButton
                                            onClick={() =>
                                                handleTransfer(e.variant_id)
                                            }
                                        >
                                            <FontAwesomeIcon
                                                icon={faExchangeAlt}
                                            />
                                        </IconButton>
                                    </div>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default StoreForm
