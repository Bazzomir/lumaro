import { Link } from 'react-router-dom';

export default function Footer({ activeLink, setActiveLink }) {

    return (
        <div className="footer">
            <div className="container-fluid px-0 footer-border-top">
                <div className="py-5 px-120 mt-5">
                    <div className="row mt-5">
                        <div className="col-sm-12 col-lg-5">
                            <h2 className="footer-logo">Lumaro</h2>
                            <div className="footer-paragraph">
                                <p className="footer-paragraph__text py-4 mb-0">
                                    Empowering businesses with cutting-edge solutions, Pixonium specializes in connecting you with global talent and innovative strategies for sustainable growth.
                                </p>
                            </div>
                            <div className="footer-paragraph__text pt-5">
                                1776 Constitution Ave NW, Washington DC 20006
                            </div>
                        </div>
                        <div className="col-sm-4 col-lg-2 pt-5 pt-lg-0">
                            <span className="footer-item-names">Quick Links</span>
                            <ul className="footer-nav mt-3">
                                <li className="footer-nav-item">
                                    <Link
                                        className={`footer-nav-link ${activeLink === "home" ? "footer-active" : ""}`}
                                        to="/lumaro"
                                        onClick={(e) => setActiveLink(e, "home")}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="footer-nav-item">
                                    <Link
                                        className={`footer-nav-link ${activeLink === "services" ? "footer-active" : ""}`}
                                        to="/lumaro/services"
                                        onClick={(e) => setActiveLink(e, "services")}
                                    >
                                        Services
                                    </Link>
                                </li>
                                <li className="footer-nav-item">
                                    <Link
                                        className={`footer-nav-link ${activeLink === "about" ? "footer-active" : ""}`}
                                        to="/lumaro/about"
                                        onClick={(e) => setActiveLink(e, "about")}
                                    >
                                        About
                                    </Link>
                                </li>
                                <li className="footer-nav-item">
                                    <Link
                                        className={`footer-nav-link ${activeLink === "contact" ? "footer-active" : ""}`}
                                        to="/lumaro/contact"
                                        onClick={(e) => setActiveLink(e, "contact")}
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-4 col-lg-3 pt-5 pt-lg-0">
                            <span className="footer-item-names">Get In Touch</span>
                            <ul className="footer-getInTouch mt-3">
                                <li className="getInTocuh-item">
                                    <Link className="getInTocuh-link" to="mailto:contact@lumaro.com">Email: contact@lumaro.com</Link>
                                </li>
                                <li className="getInTocuh-item">
                                    <Link className="getInTocuh-link" to="tel:+18883218572">Phone: +1 8883218572</Link>
                                </li>
                                <li className="getInTocuh-item">Hours: Mon-Fri 9:00AM - 5:00PM</li>
                            </ul>
                        </div>
                        <div className="col-sm-4 col-lg-2 pt-5 pt-lg-0">
                            <span className="footer-item-names">Social</span>
                            <ul className="footer-social mt-3">
                                <li className="social-item">
                                    <Link className="social-link" to="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
                                </li>
                                <li className="social-item">
                                    <Link className="social-link" to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid footer-border-top">
                    <div className="row py-3 px-120 align-items-center">
                        <div className="col-12 col-lg-5 px-0 footer-paragraph__text">©2025 Lumaro</div>
                        <div className="col-6 col-lg-2 pt-2 pt-lg-0 footer-paragraph__text">Terms & Conditions</div>
                        <div className="col-6 col-lg-2 pt-2 pt-lg-0 footer-paragraph__text">Privacy Policy</div>
                        <div className="col-12 col-lg-3 footer-paragraph__text">Made with 💜 by <br className="d-none d-lg-block" /> Blagoj Jovanovski - Bazzomir</div>
                    </div>
                </div>
            </div>
        </div>
    );
}