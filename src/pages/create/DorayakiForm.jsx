import React, { useState } from 'react'
import axios from 'axios'
import Variant from '../../apis/Variant'
const FormDorayaki = () => {
    const [input, setInput] = useState({
        flavour: '',
        decription: '',
        img_url: '',
        img: '',
    })
    const handleChange = (event) => {
        if (event.currentTarget.name !== 'img') {
            let value = event.currentTarget.value
            let name = event.currentTarget.name
            setInput({
                ...input,
                [name]: value,
            })
        }
    }

    const handleUploadPic = (event) => {
        // setInput({
        //     ...input,
        //     img: event.currentTarget.files[0],
        // })

        // console.log(event.currentTarget.files[0])
        let formData = new FormData()
        let file = event.currentTarget.files[0]
        formData.append('file', file)
        formData.append('upload_preset', 'zhuor2lb')
        axios
            .post(
                'https://api.cloudinary.com/v1_1/stand-with-dorayaki/image/upload',
                formData,
            )
            .then((resp) => {
                setInput({
                    ...input,
                    img_url: `https://res.cloudinary.com/stand-with-dorayaki/image/upload/v${resp.data.version}/${resp.data.public_id}`,
                })
            })
    }

    const handleSubmit = () => {
        Variant.insert({
            flavour: input.flavour,
            description: input.decription,
            img_url: input.img_url,
        }).then(setInput({ flavour: '', decription: '', img: '', img_url: '' }))
    }
    return (
        <div className="store-info">
            <ul
                style={{ padding: 0, display: 'flex', flexDirection: 'column' }}
            >
                <li>
                    <div className="col-1">Rasa</div>
                    <input
                        value={input.flavour}
                        key="flavour"
                        onChange={handleChange}
                        name="flavour"
                    ></input>
                </li>
                <li>
                    <div className="col-1">Deskripsi</div>
                    <textarea
                        value={input.decription}
                        key="description"
                        onChange={handleChange}
                        name="decription"
                        style={{ height: '100%', minHeight: '200px' }}
                    />
                </li>
                <li style={{ minHeight: '40px' }}>
                    <div className="col-1">Gambar</div>
                    <input
                        value={input.img}
                        key="img"
                        onChange={handleUploadPic}
                        name="img"
                        type="file"
                    ></input>
                </li>
                <li>
                    <img src={input.img_url} />
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

export default FormDorayaki
