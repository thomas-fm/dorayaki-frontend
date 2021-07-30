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
import { filterDorayaki } from '../../../resources/utils'
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
    let { id } = useParams()
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
    const [inputNew, setInputNew] = useState({
        id: '',
        total: 0,
    })
    const [update, setUpdate] = useState(false)
    const [allStore, setAllStore] = useState([])
    const [allDorayaki, setAllDorayaki] = useState([])
    const [onTransfer, setOnTransfer] = useState(false)
    const [selectedStore, setSelectedStore] = useState({
        value: '',
        label: '',
    })
    const [selectedDorayaki, setSelectedDorayaki] = useState({
        value: '',
        label: '',
    })
    const [curStock, setCurStock] = useState(0)

    const handleEdit = (idx) => {
        setOnTransfer(false)
        let d = dorayaki.find((x) => x.id === idx)
        let q = stock.find((x) => x.variant_id === idx)
        console.log(q)
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
        let val = event.currentTarget.value
        setInput({ ...input, quantity: val })
    }

    const handleAddChange = (event) => {
        console.log(event.currentTarget.key)
        let val = event.currentTarget.value
        setInputNew({ ...inputNew, total: val })
    }
    const handleSelectChange = (selectedOption) => {
        const { value, label } = selectedOption
        setSelectedStore({
            value,
            label,
        })
        console.log(selectedOption)
    }

    const handleAddStock = () => {
        // variant
        let varID = parseInt(selectedDorayaki.value, 10)
        // store
        let storeID = parseInt(store.id, 10)
        let q = parseInt(inputNew.total, 10)

        Stock.update(storeID, varID, {
            store_id: storeID,
            variant_id: varID,
            total: q,
        }).then((res) => {
            console.log(res.data)
            setFetch(true)
        })
    }
    const handleSelecDoraChange = (selectedOption) => {
        const { value, label } = selectedOption
        setSelectedDorayaki({
            value,
            label,
        })
        setInput({
            ...selectedDorayaki,
            id: value,
        })
        console.log(selectedOption)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (onTransfer) {
            let prevStock = stock.find((x) => x.variant_id == input.id).total
            let transferStock = input.quantity
            let sisa = parseInt(prevStock - transferStock, 10)
            let varID = parseInt(input.id, 10)
            let storeID = parseInt(store.id, 10)
            let destStore = parseInt(selectedStore.value, 10)
            // console.log('Apa ya')

            // console.log(varID)
            // console.log(storeID)
            // console.log(destStore)
            // console.log(sisa)

            // get stock dari destStore variant
            let arr = []
            Stock.get(destStore).then((res) => {
                arr = res.data.data
            })

            let currentDestQuantity = arr.find(
                (x) =>
                    parseInt(x.store_id, 10) === destStore &&
                    parseInt(x.variant_id, 10) === varID,
            )

            let newStock = 0

            if (currentDestQuantity) {
                newStock =
                    parseInt(currentDestQuantity.total, 10) + transferStock
            } else {
                newStock = transferStock
            }

            console.log(newStock + ' ini new stock')
            if (sisa < 0) {
                // kalau sempat kasih panik elemen
                setFetch(true)
                return
            }

            if (sisa === 0) {
                // delete yang ini
                Stock.delete(storeID, varID)
                Stock.update(destStore, varID, {
                    variant_id: varID,
                    store_id: destStore,
                    total: newStock,
                })
                setFetch(true)
            } else {
                //update
                // cek if sudah ada di database
                // kalau belum
                Stock.update(storeID, varID, {
                    variant_id: varID,
                    store_id: storeID,
                    total: sisa,
                })
                Stock.update(destStore, varID, {
                    variant_id: varID,
                    store_id: destStore,
                    total: newStock,
                })
                setFetch(true)
            }
        } else if (update) {
            let newStock = parseInt(input.quantity, 10)
            let storeID = parseInt(store.id, 10)
            let varID = parseInt(input.id, 10)

            if (newStock === 0) {
                Stock.delete(storeID, varID).then((res) => {
                    console.log(res)
                    setFetch(true)
                    setUpdate(false)
                })
            } else {
                Stock.update(storeID, varID, {
                    variant_id: varID,
                    store_id: storeID,
                    total: newStock,
                }).then((res) => {
                    console.log(res)
                    setFetch(true)
                    setUpdate(false)
                })
            }
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
                let stocksID = []
                Stock.get(id).then((resp) => {
                    setStock(
                        resp.data.data.map((el) => {
                            const { variant_id, total } = el
                            let d = arrDorayaki.find((x) => x.id == variant_id)
                            let flavour = d.flavour
                            stocksID.push({ variant_id, flavour })
                            return { variant_id, flavour, total }
                        }),
                    )

                    let unlistDorayaki = filterDorayaki(arrDorayaki, stocksID)
                    console.log(unlistDorayaki)
                    setAllDorayaki(
                        unlistDorayaki.map((el) => {
                            let ob = {
                                label: el.flavour,
                                value: el.id,
                            }

                            return ob
                        }),
                    )
                })
            })

            setFetch(false)
        }

        if (update) {
            setUpdate(false)
        }
    }, [fetch])
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
                                <div>Kuantitas</div>
                                {!onTransfer && !update && <input value={0} />}
                                {(onTransfer && (
                                    <input
                                        value={curStock}
                                        // onChange={handleChange}
                                        key="quantity"
                                        disabled
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
                            {onTransfer && (
                                <li>
                                    <div>Jumalh di transfer</div>
                                    <input
                                        value={input.quantity}
                                        onChange={handleChange}
                                        key="quantity"
                                        min={0}
                                        max={curStock}
                                    />
                                </li>
                            )}

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
                    <div className="table">
                        <ul style={{ padding: 0 }} className="stock">
                            <li className="header">
                                <div
                                    style={{ padding: '12px' }}
                                    className="col-1"
                                >
                                    <h3>
                                        <small>Variant</small>
                                    </h3>
                                </div>
                                <div
                                    style={{ padding: '12px' }}
                                    className="col-2"
                                >
                                    <h3>
                                        <small>Quantity</small>
                                    </h3>
                                </div>
                                <div
                                    style={{ padding: '12px' }}
                                    className="col-5"
                                >
                                    <h3>
                                        <small>Aksi</small>
                                    </h3>
                                </div>
                            </li>
                            {stock &&
                                stock.map((e) => (
                                    <li key={e.variant_id}>
                                        <div className="col col-1">
                                            {e.flavour}
                                        </div>
                                        <div className="col col-2">
                                            {e.total}
                                        </div>
                                        <div className="col col-3">
                                            <IconButton
                                                onClick={() =>
                                                    handleEdit(e.variant_id)
                                                }
                                            >
                                                <FontAwesomeIcon
                                                    icon={faEdit}
                                                />
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
                    <div className="form-stock">
                        <ul>
                            <li>
                                <h3>Tambah Stok</h3>
                            </li>
                            <li style={{ width: '100%' }}>
                                <Select
                                    value={selectedDorayaki}
                                    options={allDorayaki}
                                    onChange={handleSelecDoraChange}
                                />
                            </li>
                            <li>
                                <input
                                    min={1}
                                    value={inputNew.total}
                                    onChange={handleAddChange}
                                />
                            </li>
                            <li>
                                <button type="submit" onClick={handleAddStock}>
                                    <label>Tambah</label>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StoreForm
