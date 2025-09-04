import { Link } from 'react-router-dom';

export const Header = ({ activeLink, onNavClick }) => {
    return (
        <nav className="navbar navbar-expand-lg container-fluid px-120 fixed-top" >
            <Link className="navbar-brand d-grid align-items-center" to="/lumaro">
                <h2 className="nav-logo">LUMARO</h2>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-lg-end" id="navbarNav">
                <ul className="navbar-nav justify-content-center align-items-end gap-3 p-3 p-lg-0">
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeLink === "home" ? "nav-active" : ""}`}
                            onClick={() => onNavClick("home")}>Home</button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeLink === "services" ? "nav-active" : ""}`}
                            onClick={() => onNavClick("services")}>Services</button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeLink === "about" ? "nav-active" : ""}`}
                            onClick={() => onNavClick("about")}>About</button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeLink === "contact" ? "nav-active" : ""}`}
                            onClick={() => onNavClick("contact")}>Contact</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
