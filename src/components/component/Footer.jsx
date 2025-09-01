import { Link } from 'react-router-dom';
import { useData } from '../../hooks/useData.js';
import { LoadingAnimation } from '../component/animations.jsx';
import { HighlightedText } from '../../components/component/PageElements.jsx';

export default function Footer({ activeLink, onNavClick }) {

    const { data, isLoading, error } = useData();

    if (isLoading) return <LoadingAnimation />;
    if (error) return <p>{error.message}</p>;

    const footetData = data.footer;

    return (
        <div className="footer container-fluid px-0 footer-border-top">
            <div className="py-5 px-120 mt-5">
                <div className="row mt-5">
                    <div className="col-sm-12 col-lg-5">
                        {/* <h2 className="footer-logo">Lumaro</h2> */}
                        <h2 className="footer-logo">
                            {/* {footetData.header.title} */}
                            <HighlightedText text={footetData.header.title} />
                        </h2>
                        <div className="footer-paragraph">
                            <p className="footer-paragraph__text py-4 mb-0">
                                {/* Empowering businesses with cutting-edge solutions, Lumaro specializes in connecting you with global talent and innovative strategies for sustainable growth. */}
                                {footetData.header.paragraph}
                            </p>
                        </div>
                        <div className="footer-paragraph__text pt-5">
                            {/* 1776 Constitution Ave NW, Washington DC 20006 */}
                            {footetData.getInTouch.address}
                        </div>
                    </div>
                    <div className="col-sm-4 col-lg-2 pt-5 pt-lg-0">
                        <span className="footer-item-names">Quick Links</span>
                        <ul className="footer-nav mt-3">
                            <li className="footer-nav-item">
                                <Link
                                    className={`footer-nav-link ${activeLink === "home" ? "footer-active" : ""}`}
                                    to="/lumaro/home"
                                    onClick={(e) => onNavClick(e, "home")}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="footer-nav-item">
                                <Link
                                    className={`footer-nav-link ${activeLink === "services" ? "footer-active" : ""}`}
                                    to="/lumaro/services"
                                    onClick={(e) => onNavClick(e, "services")}
                                >
                                    Services
                                </Link>
                            </li>
                            <li className="footer-nav-item">
                                <Link
                                    className={`footer-nav-link ${activeLink === "about" ? "footer-active" : ""}`}
                                    to="/lumaro/about"
                                    onClick={(e) => onNavClick(e, "about")}
                                >
                                    About
                                </Link>
                            </li>
                            <li className="footer-nav-item">
                                <Link
                                    className={`footer-nav-link ${activeLink === "contact" ? "footer-active" : ""}`}
                                    to="/lumaro/contact"
                                    onClick={(e) => onNavClick(e, "contact")}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-lg-3 pt-5 pt-lg-0">
                        <span className="footer-item-names">
                            {/* Get In Touch */}
                            {footetData.getInTouch.title}
                        </span>
                        <ul className="footer-getInTouch mt-3">
                            <li className="getInTocuh-item">
                                <Link className="getInTocuh-link" to="mailto:contact@lumaro.com">
                                    {/* Email: contact@lumaro.com */}
                                    Email: {footetData.getInTouch.email}
                                </Link>
                            </li>
                            <li className="getInTocuh-item">
                                <Link className="getInTocuh-link" to="tel:+18883218572">
                                    {/* Phone: +1 8883218572 */}
                                    Phone: {footetData.getInTouch.phone}
                                </Link>
                            </li>
                            <li className="getInTocuh-item">
                                {/* Hours: Mon-Fri 9:00AM - 5:00PM */}
                                Hours: {footetData.getInTouch.hours}
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-lg-2 pt-5 pt-lg-0">
                        <span className="footer-item-names">
                            {/* Social */}
                            {footetData.socialMedia[0]}
                        </span>
                        <ul className="footer-social mt-3">
                            <li className="social-item">
                                <Link className="social-link" to="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                    {/* LinkedIn */}
                                    {footetData.socialMedia[1]}
                                </Link>
                            </li>
                            <li className="social-item">
                                <Link className="social-link" to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                    {/* Instagram */}
                                    {footetData.socialMedia[2]}
                                </Link>
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
                    <div className="col-12 col-lg-3 footer-paragraph__text">Dev with 💜 by Bazzomir</div>
                </div>
            </div>
        </div>
    );
}