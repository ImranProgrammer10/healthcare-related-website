import React from 'react';
import './css/contact.css'
const Contact = () => {
    return (
        <section class="space">
            <div class="container container-custom">
                <div class=" row">
                    <div class="col-md-8">
                        <div class="map-img-wrap">
                            <img src="https://demo.web3canvas.com/themeforest/medenin/images/contact-map.png" class="img-fluid" alt="#" />

                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="contact-box">
                            <p>Lorem ipsum dolor sit amet consect etur adipi sicing elit, sed do eiusm</p>
                            <hr />
                            <div class="contact-title">
                                <h4>Contact Information</h4>
                                <i class="fas fa-phone-volume"></i>
                                <div class="contact-title_icon">
                                    <p>Phone</p>
                                    <h6>+123 456 7890</h6>
                                </div>
                            </div>
                            <div class="contact-title">
                                <i class="fas fa-envelope"></i>
                                <div class="contact-title_icon">
                                    <p>Email</p>
                                    <h6>info@example.com</h6>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div class="contact-box">
                            <div class="contact-title">
                                <h4>Head Office</h4>
                                <i class="fas fa-map-marker-alt"></i>
                                <div class="contact-title_icon">
                                    <p>Location</p>
                                    <h6>2663 Lodgeville Road <br />
                                        Milliapolis, Minnasotta <br />
                                        55402, USA</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;