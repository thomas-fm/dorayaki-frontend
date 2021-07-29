import React from 'react'
import DorayakiCard from './Card'
import './index.scss'

const DorayakiList = () => {
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
                <DorayakiCard
                    url="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                    name="Dorayaki"
                    description="apa ya"
                    handleEdit={handleEdit}
                    id={1}
                />
                <DorayakiCard
                    url="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                    name="Dorayaki"
                    description="apa ya"
                    handleEdit={handleEdit}
                    id={2}
                />
                <DorayakiCard
                    url="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                    name="Dorayaki"
                    description="apa ya"
                    handleEdit={handleEdit}
                    id={3}
                />
                <DorayakiCard
                    url="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                    name="Dorayaki"
                    description="apa ys adksdj asldkja slkdjalskdjalsk
                    asdasdas
                    adsdasdaa ajsdhasdh asjkdaslj asdjk
                    sdasdasd asdkasdklaj
                    jd alsdjk a"
                    handleEdit={handleEdit}
                    id={4}
                />
            </div>
        </>
    )
}

export default DorayakiList
