import React from 'react';
import { ReactComponent as DarkLogo } from '../../assets/image/logo/darkLogo.svg'

export default function Footer() {
    return (
        <div className="footer">
            <div className="container-fluid px-0 footer-border-top">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-sm-12 col-lg-5">
                            <DarkLogo alt="Logo Footer" className="footer-logo" />
                            <div className="footer-paragraph">
                                <p className="footer-paragraph__text mb-0 mt-4">
                                    Empowering businesses with cutting-edge solutions, Pixonium specializes in connecting you with global talent and innovative strategies for sustainable growth.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-4 col-lg-2 pt-5 pt-lg-0">
                            <span className="footer-item-names">Quick Links</span>
                            <ul className="footer-nav mt-3">
                                <li className="footer-nav-item">
                                    <a className="footer-nav-link" href="#">Home</a>
                                </li>
                                <li className="footer-nav-item">
                                    <a className="footer-nav-link" href="#">Services</a>
                                </li>
                                <li className="footer-nav-item">
                                    <a className="footer-nav-link" href="#">About</a>
                                </li>
                                <li className="footer-nav-item">
                                    <a className="footer-nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-4 col-lg-3 pt-5 pt-lg-0">
                            <span className="footer-item-names">Get In Touch</span>
                            <ul className="footer-getInTouch mt-3">
                                <li className="getInTocuh-item">
                                    <a className="getInTocuh-link" href="#">Email: contact@pixonium.com</a>
                                </li>
                                <li className="getInTocuh-item">
                                    <a className="getInTocuh-link" href="#">Phone: 760-284-8287</a>
                                </li>
                                <li className="getInTocuh-item">Hours: Mon-Fri 9:00AM - 5:00PM</li>
                            </ul>
                        </div>
                        <div className="col-sm-4 col-lg-2 pt-5 pt-lg-0">
                            <span className="footer-item-names">Social</span>
                            <ul className="footer-social mt-3">
                                <li className="social-item">
                                    <a className="social-link" href="#">LinkedIn</a>
                                </li>
                                <li className="social-item">
                                    <a className="social-link" href="#">Instagram</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-paragraph__text pt-5">
                        440 N Barranca Ave, California, CA 91723
                    </div>
                </div>
                <div className="container-fluid footer-border-top" >
                    <div className="container">
                        <div className="row pt-3">
                            <div className="col-12 col-lg-5 footer-paragraph__text">©2024 Pixonium</div>
                            <div className="col-6 col-lg-2 pt-2 pt-lg-0 footer-paragraph__text">Terms & Conditions</div>
                            <div className="col-6 col-lg-2 pt-2 pt-lg-0 footer-paragraph__text">Privacy Policy</div>
                            <div className="col-12 col-lg-3 py-2 py-lg-0 footer-paragraph__text">Made with 💜 by <br className="d-none d-lg-block"/> Blagoj Jovanovski - Bazzomir</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}