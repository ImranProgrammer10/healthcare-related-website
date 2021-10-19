import React, { useEffect, useState } from 'react';
import heroDoctor from '../assets/images/hero-doctor-1.png';
import './css/home.css';
import Doc from './Doc';


const Home = () => {

    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('doctor.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <div>
            <div class="container">




                <div class="slick-list draggable" >
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-5 d-flex align-items-center">



                        </div>

                    </div>


                    <div class="banner slick-slide" tabindex="-1" role="tabpanel" id="slick-slide01" aria-describedby="slick-slide-control01" style={{ width: "1230px" }}>
                        <div class="row">
                            <div class="col-12 col-md-6 col-lg-5 d-flex align-items-center">



                            </div>

                        </div>
                    </div><div class="banner slick-slide slick-current slick-active" tabindex="0" role="tabpanel" id="slick-slide02" aria-describedby="slick-slide-control02" data-slick-index="2" aria-hidden="false">
                        <div class="row">
                            <div class="col-12 col-md-6 col-lg-5 d-flex align-items-center">

                                <div class="main-title">
                                    <span>We are here for you</span>
                                    <h1>
                                        What Makes Us Better, Makes You Better.
                                    </h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu lacus ex.
                                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                                        ipsum dolor sit amet.
                                    </p>
                                    <button className="btn btn-primary">Make Appointment</button>


                                </div>

                            </div>
                            <div class="col-12 col-md-6 col-lg-7 d-flex align-items-end">
                                <img src={heroDoctor} class="img-fluid animated-hero" alt="hero" />

                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="d-flex justify-content-center align-items-center flex-wrap">
                {
                    doctors.map(service => <Doc service={service} ></Doc>)
                }
            </div>


        </div>


    );
};

export default Home;