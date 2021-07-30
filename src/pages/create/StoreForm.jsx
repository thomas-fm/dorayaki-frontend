import React, { useState } from 'react'
import Store from '../../apis/Store'
import Variant from '../../apis/Variant'

const FormStore = () => {
    const [input, setInput] = useState({
        name: '',
        street: '',
        district: '',
        province: '',
    })

    const handleChange = (event) => {
        event.preventDefault()
        let value = event.currentTarget.value
        let name = event.currentTarget.name

        setInput({
            ...input,
            [name]: value,
        })
    }
    const handleSubmit = () => {
        // console.log(input.name)
        // console.log(input.street)
        // console.log(input.district)
        // console.log(input.province)

        Store.insert({
            name: input.name,
            street: input.street,
            district: input.district,
            province: input.province,
        })
    }
    return (
        <div className="store-info">
            <ul
                style={{ padding: 0, display: 'flex', flexDirection: 'column' }}
            >
                <li>
                    <div className="col-1">Nama</div>
                    <input
                        value={input.name}
                        key="name"
                        onChange={handleChange}
                        name="name"
                    ></input>
                </li>
                <li>
                    <div className="col-1">Alamat</div>
                    <input
                        value={input.street}
                        key="street"
                        onChange={handleChange}
                        name="street"
                    ></input>
                </li>
                <li>
                    <div className="col-1">Kecamatan</div>
                    <input
                        value={input.district}
                        key="district"
                        onChange={handleChange}
                        name="district"
                    ></input>
                </li>
                <li>
                    <div className="col-1">Provinsi</div>
                    <input
                        value={input.province}
                        key="province"
                        onChange={handleChange}
                        name="province"
                    ></input>
                </li>
                <li>
                    <button onClick={handleSubmit}>
                        <label>Tambah</label>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default FormStore
