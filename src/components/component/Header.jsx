export default function Header({ activeLink, setActiveLink }) {
    return (
        <div className="container-fluid px-0">
            <nav className="navbar navbar-expand-lg container-fluid px-120">
                <a className="navbar-brand d-grid align-items-center" href="#home">
                    <h2 className="nav-logo">LUMARO</h2>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-lg-end" id="navbarNav">
                    <ul className="navbar-nav gap-3">
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeLink === "home" ? "nav-active" : ""}`}
                                href="#home"
                                onClick={() => setActiveLink("home")}
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeLink === "services" ? "nav-active" : ""}`}
                                href="#services"
                                onClick={() => setActiveLink("services")}
                            >
                                Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeLink === "about" ? "nav-active" : ""}`}
                                href="#about"
                                onClick={() => setActiveLink("about")}
                            >
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeLink === "contact" ? "nav-active" : ""}`}
                                href="#contact"
                                onClick={() => setActiveLink("contact")}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
