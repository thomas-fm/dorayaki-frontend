import React, { ChangeEvent, useState } from "react";

import { Input } from '@material-ui/core';

export const Login = () => {
    const[login, setLogin] = useState({
        username: "",
        password: ""
    })
    const handleSubmit = () => {

    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.currentTarget.value;
        event.currentTarget.name === "username"? 
        setLogin({...login, username: value}) : setLogin({...login, password: value});        
    }
    return (
        <div className="login-container">
            <div className="content" id="left">
                <h1>Stand with Dorayaki</h1>
                <section>Management system of biggest dorayaki franchise, connecting various Stand with Dorayaki store around Indonesia.</section>
            </div>
            <div className="content" id="right">
                <h2>Sign in</h2>
                <form className="form">
                    <Input 
                        type="text" 
                        value={login.username} 
                        onChange={handleChange} 
                        name="username"
                        placeholder="Username"
                        id="item"
                        autoComplete="off"
                        required
                    />
                    <Input 
                        type="password" 
                        value={login.password} 
                        onChange={handleChange}
                        name="password"
                        placeholder="Password"
                        id="item"
                        autoComplete="off"
                        required
                    />
                    <button 
                        type="submit" 
                        onClick={handleSubmit}
                        id="item-btn"
                    >
                        <label htmlFor="">Submit</label>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login