import { Button } from 'antd'
import React from 'react'
import { ButtonBase } from '@material-ui/core'
import './index.scss'

//
const DorayakiCard = ({ url, name, description, handleEdit, id }) => {
    return (
        <div className="a-box">
            <div className="img-container">
                <div className="img-inner">
                    <div className="inner-skew">
                        <img src={url} />
                    </div>
                </div>
            </div>
            <div className="text-container">
                <h3>{name}</h3>
                <div>{description}</div>
            </div>
        </div>
    )
}

export default DorayakiCard
