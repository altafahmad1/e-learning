import React from "react";
import {Link} from 'react-router-dom';
import './styles.css';

function CarouselItem(props){
    return (
        <div className="carousel-item">
            <div className="row">
                <div className="col-sm-12 col-md-9 order-md-2">
                    <img alt={props.alt} src={props.img}/>
                </div>
                <div className="d-flex justify-content-center carousel-details col-sm-12 col-md-3 order-md-1">
                    <div>
                        <h5>{props.heading}</h5>
                        <p>{props.details}</p>
                        <Link to='/' className="btn btn-outline-dark">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarouselItem;