import React from 'react';
import {useNavigate, Link} from "react-router-dom";

const Navbar = (props) => {
    const navigate = useNavigate()

    const onLogoutCLick = ev => {
        ev.preventDefault()
        localStorage.clear()
        navigate('/')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="https://fargo.uz/images/logo.png" alt="..." height="36" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/link">Link</a>
                        </li>

                        <li className="nav-item ms-4">
                            <button onClick={onLogoutCLick} className="btn btn-warning">Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;