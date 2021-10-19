import React from 'react';
import { Container } from 'react-bootstrap';

import useServices from './../hooks/useServices';
import Service from './Service';

const Services = () => {
    const { services } = useServices();
    const details = (details) => {
        !localStorage.data ? localStorage.setItem("data", JSON.stringify(details)) :
            localStorage.clear();
        localStorage.setItem("data", JSON.stringify(details));
    }
    return (
        <div>
            <div>
                <h2>Our Services</h2>
            </div>


            <Container>
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                    {services?.map((service) => (
                        <Service service={service} details={details} key={service.key}></Service>
                    ))}
                </div>




            </Container>




        </div>
    );
};

export default Services;