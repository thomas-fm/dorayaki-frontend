import React, { useEffect, useState } from "react";
import { 
    Route,
    Link,
    Switch
} from "react-router-dom";

const Navbar = () => {
    // State when admin already login to website
    const [user, setUser] = useState({
        id: ""
    });
    useEffect(() => { 
        
    }, []);

    return (
        <div className="navbar">
            <nav>
                <div className="logo"></div>
                <div className="content">
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            How to use
                        </li>
                        <li className="login-btn">
                            Login
                        </li>
                        {/* theme switcher */}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar