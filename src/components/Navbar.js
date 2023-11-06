import React, { Component } from 'react'
import {  Link } from "react-router-dom";
import '../App.css';

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                {/* <nav class="navbar navbar-expand-lg bg-body-tertiary"> */}
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
                                </li>
                                <li className="nav-item" style={{display:"flex"}}>
                                    <Link className="nav-link" to="/Business">Business</Link>
                                    <Link className="nav-link" to="/Entertainment">Entertainment</Link>
                                    <Link className="nav-link" to="/General">General</Link>
                                    <Link className="nav-link" to="/Health">Health</Link>
                                    <Link className="nav-link" to="/Science">Science</Link>
                                    <Link className="nav-link" to="/Sports">Sports</Link>
                                    <Link className="nav-link" to="/Technology">Technology</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                
               
               
            </div>
        )
    }
}

export default Navbar
