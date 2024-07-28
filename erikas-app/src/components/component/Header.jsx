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
            <nav class="navbar navbar-expand-lg container-fluid">
                <div class="container">
                    <a class="navbar-brand" href="#">pixonium</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse me-auto" id="navbarNav">
                        <div>
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            {/* </div> */}
        </div>
    )
}