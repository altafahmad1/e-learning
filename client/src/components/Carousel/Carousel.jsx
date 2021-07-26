import React from "react";
import CarouselItem from "./../CarouselItem/CarouselItem";
import {Link} from 'react-router-dom';
import './styles.css';

function Carousel(){
    return (
        <div id="my-carousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
            <li data-target="#my-carousel" data-slide-to="0" className="active"></li>
            <li data-target="#my-carousel" data-slide-to="1"></li>
            <li data-target="#my-carousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row">
                    <div className="col-sm-12 col-md-9 order-md-2">
                        <img alt="" src="https://images.pexels.com/photos/196659/pexels-photo-196659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100"/>
                    </div>
                    <div className="d-flex justify-content-center carousel-details col-sm-12 col-md-3 order-md-1">
                        <div>
                            <h5>Best Online Entry Test Preparation Website</h5>
                            <p>Here at E-Learning, our only goal is to see you get admitted into the best universities of Pakistan.</p>
                            <Link to='/' className="btn btn-outline-dark">Read More</Link>
                        </div>
                    </div>
                    </div>
                </div>

                <CarouselItem 
                    img="https://images.pexels.com/photos/164637/pexels-photo-164637.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100"
                    heading="Most Affordable Entry Test Preparation Service"
                    details="The prices are only enough to enable us to keep this service running for you."
                />

                <CarouselItem 
                    img="https://images.pexels.com/photos/267586/pexels-photo-267586.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    heading="Now Scholarships are Here"
                    details="The scholarships can help our needy talented students to prepare for their tests without paying a single rupee."
                />

            </div>
      
            <a className="carousel-control-next" href="#my-carousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon"></span>
            </a>
        </div>
    );
}

export default Carousel;