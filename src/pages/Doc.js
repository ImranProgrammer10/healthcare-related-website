import React from 'react';

const Doc = (props) => {
    const { name, image } = props.service;
    return (
        <div className="card col-12 col-md-3 my-4 mx-2 text-center">
            <img src={image} style={{ width: '300px', height: '200px', margin: '0 auto' }} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    );
};

export default Doc;