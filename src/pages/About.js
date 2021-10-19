import React from 'react';
import { Link } from 'react-router-dom';
import aboutimg from '../assets/images/about-img.jpg'

import './css/about.css';
const About = () => {
    return (
        <div>
            <section className="about-section space-mt">
                <div className="container container-custom">
                    <div className="row">
                        <div className="col-md-12">

                            <div className="about-video_block">
                                <div className="row">
                                    <div className="col-md-12 col-lg-6">
                                        <a href="https://www.youtube.com/watch?v=pBFQdxA-apI" className="video-play-img popup-youtube">
                                            <img src={aboutimg} className="img-fluid w-100" alt="#" />
                                            <div className="video-play-btn">
                                                <div className="video-play-icon">
                                                    <i className="fas fa-play"></i>
                                                </div>
                                                <span>PLAY VIDEO</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-12 col-lg-6">
                                        <div className="video-play-text">
                                            <h2>Short Story About Mededin Clinic.</h2>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                                            </p>
                                            <p>
                                                Sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
                                                <Link to="#">Readmore</Link>
                                            </p>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="facilities blue">
                                                        <h3>1000+</h3>
                                                        <span>Happy Patients</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="facilities green">
                                                        <h3>215+</h3>
                                                        <span>Expert Doctors</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="facilities yellow">
                                                        <h3>315+</h3>
                                                        <span>Hospital Rooms</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="facilities gray">
                                                        <h3>106+</h3>
                                                        <span>Award Winner</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;