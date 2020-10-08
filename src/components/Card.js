import React from 'react';

function Card(props) {
    return (
    <div className="card">
        {props.children}
        <div className="card-body">
            <h5 className="card-title">{props.header}</h5>
            <p className="card-text"> {props.info} </p>
            <a href="#" className="btn btn-primary">{props.btnText}</a>
        </div>
    </div>
    )
}

export default Card;