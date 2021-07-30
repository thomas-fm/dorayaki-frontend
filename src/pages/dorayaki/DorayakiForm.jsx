import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import './index.scss'

const DorayakiForm = () => {
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    const handleEdit = (e) => {}
    const handleDelete = (e) => {}
    const handleChange = (e) => {
        let file = e.currentTarget.files[0]
    }
    return (
        <>
            <div className="container-dorayaki-form">
                <h2>Tambah Varian</h2>

                <ul style={{ padding: 0 }}>
                    <li>
                        <div className="col-1">Nama</div>
                        <input></input>
                    </li>
                    <li>
                        <div className="col-1">URL</div>
                        <input type="file" onChange={}></input>
                    </li>
                    <li>
                        <div className="col-1">Deskripsi</div>
                        <textarea></textarea>
                    </li>
                    <li>
                        <button type="submit" onClick={handleEdit}>
                            <label>Submit</label>
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default DorayakiForm
