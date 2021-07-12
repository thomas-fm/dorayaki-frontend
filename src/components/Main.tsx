import React from "react"
import Navbar from "./Navbar"
import Section from "./Section";
import { Route, Router, Switch } from "react-router-dom"

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Section/>
        </div>
    );
};

export default Main