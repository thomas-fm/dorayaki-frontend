import React, { useEffect, useState } from 'react'
import { Button, Tabs } from 'antd'
import { useParams } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconButton } from '@material-ui/core'
import { faEdit, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons'

const data = [
    {
        id: 1,
        name: 'Thomas',
        quantity: 100,
    },
    {
        id: 2,
        name: 'Thomas3',
        quantity: 100,
    },
    {
        id: 3,
        name: 'Thomas4',
        quantity: 100,
    },
    {
        id: 4,
        name: 'Thomas5',
        quantity: 100,
    },
]
const StoreForm = () => {
    const callback = (key) => {
        console.log(key)
    }
    let { id } = useParams()
    const [store, setStore] = useState()
    const [stock, setStock] = useState()
    const [dorayaki, setDorayaki] = useState()
    const [input, setInput] = useState({
        id: 0,
        name: '',
        quantity: 0,
    })
    const [update, setUpdate] = useState(false)

    const handleEdit = (idx) => {
        let dorayaki = data.find((x) => x.id === idx)
        setInput({
            id: idx,
            name: dorayaki.name,
            quantity: dorayaki.quantity,
        })
        setUpdate(true)
    }

    const handleDelete = (id) => {
        console.log(id)
    }

    const handleChange = (event) => {
        console.log(event.currentTarget.key)
    }

    useEffect(() => {
        if (update) {
            //
            setUpdate(false)
        }
    }, [update])
    return (
        <>
            <div className="parent">
                <div className="container-store">
                    <div className="store-info">
                        <h2>Deskripsi Toko</h2>

                        <ul style={{ padding: 0 }}>
                            <li>
                                <div className="col-1">Nama</div>
                                <input></input>
                            </li>
                            <li>
                                <div className="col-1">Alamat</div>
                                <input></input>
                            </li>
                            <li>
                                <div className="col-1">Kecamatan</div>
                                <input></input>
                            </li>
                            <li>
                                <div className="col-1">Provinsi</div>
                                <input></input>
                            </li>
                            <li>
                                <button type="submit" onClick={handleEdit}>
                                    <label>Edit</label>
                                </button>
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
                                />
                            </li>
                            <li>
                                <div>Quantity</div>
                                <input
                                    value={input.quantity}
                                    onChange={handleChange}
                                    key="quantity"
                                />
                            </li>
                            <li>
                                <Button>Submit</Button>
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
                        {data.map((e, idx) => (
                            <li key={e.id}>
                                <div className="col col-1">{e.name}</div>
                                <div className="col col-2">{e.quantity}</div>
                                <div className="col col-3">
                                    <IconButton
                                        onClick={() => handleEdit(e.id)}
                                    >
                                        <FontAwesomeIcon icon={faEdit} />
                                    </IconButton>
                                </div>
                                <div className="col col-4">
                                    <IconButton
                                        onClick={() => handleDelete(e.id)}
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
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
