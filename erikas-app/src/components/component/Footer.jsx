// import { ReactComponent as DarkLogo } from '../../assets/image/logo/darkLogo.svg';
import darkLogo from '../../assets/image/logo/darkLogo.svg';

export default function Footer({ activeLink, setActiveLink }) {

    return (
        <div className="footer">
            <div className="container-fluid px-0 footer-border-top">
                <div className="py-5 px-120 mt-5">
                    <div className="row mt-5">
                        <div className="col-sm-12 col-lg-5">
                            {/* <DarkLogo alt="Logo Footer" className="footer-logo" /> */}
                            <img src={darkLogo} alt="Logo Footer" className="footer-logo" />
                            <div className="footer-paragraph">
                                <p className="footer-paragraph__text py-4 mb-0">
                                    Empowering businesses with cutting-edge solutions, Pixonium specializes in connecting you with global talent and innovative strategies for sustainable growth.
                                </p>
                            </div>
                            <div className="footer-paragraph__text pt-5">
                                440 N Barranca Ave, California, CA 91723
                            </div>
                        </div>
                        <div className="col-sm-4 col-lg-2 pt-5 pt-lg-0">
                            <span className="footer-item-names">Quick Links</span>
                            <ul className="footer-nav mt-3">
                                <li className="footer-nav-item">
                                    <a
                                        className={`footer-nav-link ${activeLink === "home" ? "footer-active" : ""}`}
                                        href="#home"
                                        onClick={() => setActiveLink("home")}
                                    >
                                        Home
                                    </a>
                                </li>
                                <li className="footer-nav-item">
                                    <a
                                        className={`footer-nav-link ${activeLink === "services" ? "footer-active" : ""}`}
                                        href="#services"
                                        onClick={() => setActiveLink("services")}
                                    >
                                        Services
                                    </a>
                                </li>
                                <li className="footer-nav-item">
                                    <a
                                        className={`footer-nav-link ${activeLink === "about" ? "footer-active" : ""}`}
                                        href="#about"
                                        onClick={() => setActiveLink("about")}
                                    >
                                        About
                                    </a>
                                </li>
                                <li className="footer-nav-item">
                                    <a
                                        className={`footer-nav-link ${activeLink === "contact" ? "footer-active" : ""}`}
                                        href="#contact"
                                        onClick={() => setActiveLink("contact")}
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-4 col-lg-3 pt-5 pt-lg-0">
                            <span className="footer-item-names">Get In Touch</span>
                            <ul className="footer-getInTouch mt-3">
                                <li className="getInTocuh-item">
                                    <a className="getInTocuh-link" href="mailto:someone@example.com">Email: contact@pixonium.com</a>
                                </li>
                                <li className="getInTocuh-item">
                                    <a className="getInTocuh-link" href="tel:012-345-6789">Phone: 760-284-8287</a>
                                </li>
                                <li className="getInTocuh-item">Hours: Mon-Fri 9:00AM - 5:00PM</li>
                            </ul>
                        </div>
                        <div className="col-sm-4 col-lg-2 pt-5 pt-lg-0">
                            <span className="footer-item-names">Social</span>
                            <ul className="footer-social mt-3">
                                <li className="social-item">
                                    <a className="social-link" href="https://www.linkedin.com/">LinkedIn</a>
                                </li>
                                <li className="social-item">
                                    <a className="social-link" href="https://www.Instagram.com/">Instagram</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid footer-border-top">
                    <div className="row py-3 px-120 align-items-center">
                        <div className="col-12 col-lg-5 px-0 footer-paragraph__text">©2024 Pixonium</div>
                        <div className="col-6 col-lg-2 pt-2 pt-lg-0 footer-paragraph__text">Terms & Conditions</div>
                        <div className="col-6 col-lg-2 pt-2 pt-lg-0 footer-paragraph__text">Privacy Policy</div>
                        <div className="col-12 col-lg-3 footer-paragraph__text">Made with 💜 by <br className="d-none d-lg-block" /> Blagoj Jovanovski - Bazzomir</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
