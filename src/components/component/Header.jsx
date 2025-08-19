import { Link } from 'react-router-dom';

export default function Header({ activeLink, setActiveLink }) {
    return (
        <nav className="navbar navbar-expand-lg container-fluid px-120 fixed-top" >
            <Link className="navbar-brand d-grid align-items-center" to="/lumaro">
                <h2 className="nav-logo">LUMARO</h2>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-lg-end" id="navbarNav">
                <ul className="navbar-nav gap-3">
                    <li className="nav-item">
                        <Link
                            className={`nav-link ${activeLink === "home" ? "nav-active" : ""}`}
                            to="/lumaro/home"
                            onClick={() => setActiveLink("home")}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className={`nav-link ${activeLink === "services" ? "nav-active" : ""}`}
                            to="/lumaro/services"
                            onClick={() => setActiveLink("services")}
                        >
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className={`nav-link ${activeLink === "about" ? "nav-active" : ""}`}
                            to="/lumaro/about"
                            onClick={() => setActiveLink("about")}
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className={`nav-link ${activeLink === "contact" ? "nav-active" : ""}`}
                            to="/lumaro/contact"
                            onClick={() => setActiveLink("contact")}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
