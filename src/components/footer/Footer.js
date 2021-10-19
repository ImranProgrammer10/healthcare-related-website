import React from "react";
import "./footer.css";
// import footerBG from "./../../assets/images/footer-bg.jpg";
// import payment from "./../../assets/images/payment.png";
import footerLogo from "../../assets/images/foot-logo.png";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {


    faEnvelope,
    faPhone,


} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { faFacebook, faInstagram, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div style={{ backgroundImage: `url(https://demo.web3canvas.com/themeforest/medenin/images/footer-bg.jpg)` }} className="text-white">
            <div className="py-4 gradient">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="foot-contact-block  ">
                                <div className="text-center my-4">
                                    <img width="120px" src={footerLogo} alt="" />
                                </div>

                                <p className="text-center">Lorem, ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Sequi officiis expedita sapiente   <br /> nostrum eum excepturi <br /> obcaecati ex illo eaque.</p>
                                <br />
                                <h4>
                                    <FontAwesomeIcon icon={faPhone} />
                                    <span className="m-3">3123 456 7890</span>

                                </h4>
                                <h4>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <span className="m-3">3123 456 7890</span>

                                </h4>

                            </div>





                        </Col>
                        <Col md={2}>
                            <h3>Quick Links</h3>
                            <div style={{ padding: "50px" }}>
                                <ul className="list-unstyled footer-link">
                                    <li>
                                        <NavLink to="/home">Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/about">About us</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contact">Contact us</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/service">Services</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/policy">Policy</NavLink>
                                    </li>
                                </ul>

                            </div>

                        </Col>
                        <Col md={4}>
                            <div className="">
                                <div className="mb-5 ">
                                    <button className="btn btn-outline-success m-3 w-100">Find a Doctor</button>
                                    <br />
                                    <button className="btn btn-outline-success m-3 w-100">Carrer</button>
                                    <br />
                                    <button className="btn btn-outline-success m-3 w-100">Newsletter</button>

                                </div>
                                <div>
                                    <ul>
                                        <span className="m-3"> <FontAwesomeIcon icon={faFacebook} /></span>
                                        <span className="m-3"> <FontAwesomeIcon icon={faInstagram} /></span>
                                        <span className="m-3"> <FontAwesomeIcon icon={faTwitterSquare} /></span>
                                        <span className="m-3"> <FontAwesomeIcon icon={faLinkedin} /></span>
                                    </ul>

                                </div>




                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <hr className="m-0 p-0" />
            <p className="text-center m-0 py-3 copyright">
                Copyright © All Reserved by Coding Club pro - programming Community in
                2021
            </p>
        </div>
    );
};

export default Footer;