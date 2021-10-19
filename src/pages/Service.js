import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { image, name, description } = props.service;
    return (
        <div className="m-auto my-3">
            <Card className="m-2" style={{ width: '18rem' }}>
                <Card.Img className="mx-auto" style={{ width: "50px", height: "60px", }} variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">

                </ListGroup>
                <Card.Body>
                    <Link className='btn btn-info' to='/details' onClick={() => props.details(props.service)}>View Details</Link>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;