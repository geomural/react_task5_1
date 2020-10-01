import React from 'react';

function Card(props) {
    return (
    <div className="card">
        {props.imgSrc ? <img src={props.imgSrc} className="card-img-top" alt={props.imgAlt} /> : null}
        <div className="card-body">
            <h5 className="card-title"> {props.header} </h5>
            {props.children}
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    )
}

export default Card;