import React, { useEffect, useState } from 'react'
import Variant from '../../apis/Variant'
import DorayakiCard from './Card'
import './index.scss'

const DorayakiList = () => {
    const [variants, setVariants] = useState([])
    useEffect(() => {
        Variant.get().then((res) => {
            console.log(res.data.data)

            setVariants(
                res.data.data.map((el) => {
                    const { flavour, id, img_url, description } = el

                    return { flavour, id, img_url, description }
                }),
            )
        })
    }, [])
    const handleEdit = (e) => {
        console.log(e.currentTarget.value)
    }
    return (
        <>
            <div
                style={{
                    textAlign: 'center',
                    padding: '30px',
                    width: '100%',
                    padding: '12px',
                }}
                className="dorayaki-container"
            >
                {variants.map((el) => (
                    <DorayakiCard
                        url={el.img_url}
                        name={el.flavour}
                        description={el.description}
                        id={el.id}
                    />
                ))}
            </div>
        </>
    )
}

export default DorayakiList
