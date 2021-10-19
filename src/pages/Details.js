import React from 'react';

const Details = () => {
    const { name, image, description } = JSON.parse(localStorage.getItem('data'));
    return (
        <div>

            <div class="card mb-3 col-md-5 col-12 m-auto" >
                <img src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title"> {name}</h5>
                    <p class="card-text">{description}</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>


        </div>
    );
};

export default Details;