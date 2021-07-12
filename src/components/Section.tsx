import React, { useEffect, useState } from "react";
import illustration from "../public/img/8401.jpg"

const Section = () => {
    const[id, setID] = useState({
        id: ""
    })

    useEffect(()=>{

    },[])

    return(
        <div className="home-section">
            <div className="illustration">
                <img src={illustration} alt="ilustrasi"/>
            </div>
            <div className="section-content">
                <div className="section-title">
                    <h1>Stand with Dorayaki</h1>
                </div>
                <div className="section-text">
                    <p>Management system of biggest dorayaki franchise, connecting various Stand with Dorayaki store around Indonesia.</p>
                </div>
                <div className="section-bg" id="tri-shape"></div>
            </div>
        </div>
    )
}

export default Section