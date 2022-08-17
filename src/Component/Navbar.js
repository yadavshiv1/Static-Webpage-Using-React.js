import React from "react";
import Logo from "../img/log.png"

export function Navbar() {
    return (
        <div className="mainNavbar">
            <div className="navbar">
                <div><img src={Logo} alt="logo" /></div>
                <ul>
                    <li>Abotut</li>
                    <li>Home</li>
                    <li>Contact</li>
                    <li><button className="btn-nav">Login</button></li>
                </ul>
            </div>
        </div>
    );
}