import React from 'react';

export default function Header() {
    return (
        <div className="container-fluid px-0">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0 py-2">440 N Barranca Ave, California, 91723</p>
                    <p className="mb-0 py-2">760-284-8287</p>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg container-fluid px-5">
                <a className="navbar-brand" href="#home">pixonium</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-lg-end" id="navbarNav">
                    <ul className="navbar-nav gap-3">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}