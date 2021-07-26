import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Carousel from '../../components/Carousel/Carousel';
import {Link} from 'react-router-dom';

import './styles.css';

export default function Homepage() {
    return (
        <div>
            <Navbar />
            <Carousel />
            <section id="welcome-section">
                <div className="container">
                <h1>Welcome to E-Learning</h1>
                <p>Got your entry test ahead? Well worry no more. Now, you don't have to go to a specific institution
                just for preparation of one of the mosts decisive moments of your life. Here at E-learning, we can provide
                you with all you need for your preparation.</p>
                </div>
            </section>

            <section id="features-section">
                <div className="container">
                <h2>Why E-Learning?</h2>
                <div className="row">
                    <div className="feature col-sm-12 col-md-4">
                    <i className="feature-icon far fa-check-circle fa-5x"></i>  
                    <br></br>   
                    <h4>Large Collection of MCQ's</h4>
                    <p>Hundreds of MCQ's from different subjects with solutions. The difficulty of the MCQ's ranges from easy to difficult to ensure your 100% preparation.</p>         
                    </div>
                    <div className="feature col-sm-12 col-md-4">
                    <i className="feature-icon fas fa-graduation-cap fa-5x"></i>
                    <br></br>   
                    <h4>Scholarships for the Needy</h4>
                    <p>We're the first online web entry test preparation website which provides scholarship to the students who can't pay.</p>         
                    </div>
                    <div className="feature col-sm-12 col-md-4">
                    <i className="feature-icon fas fa-phone-volume fa-5x"></i> 
                    <br></br>   
                    <h4>24/7 Support for Customers</h4>
                    <p>Preparing for your entry test, and stuck on a specific question? Don't worry. Our support is live every time to serve you.</p>         
                    </div>
                </div>
                </div>
            </section>
            
            <section id="offered-courses-section">
            <div className="container"> 
                <h2>We Prepare You For</h2>
                <div className="row">
                <div className="col-sm-12 col-md-6">
                    <h3>Engineering</h3>
                    <div className="row test-names">
                    <div className="col-sm-2 col-md-2 offset-sm-1">
                        <h4>ECAT</h4>
                    </div>
                    <div className="col-sm-2 col-md-2">
                        <h4>NET </h4>
                    </div>
                    <div className="col-sm-2 col-md-2">
                        <h4>NTS </h4>
                    </div>
                    <div className="col-sm-2 col-md-2">
                        <h4>PIEAS </h4>
                    </div>
                    <div className="col-sm-2 col-md-2">
                        <h4>GIKI </h4>
                    </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <h3>Medical</h3>
                    <div className="row test-names">
                    <div className="col-sm-2 col-md-2 offset-sm-1">
                        <h4>ETEA</h4>
                    </div>
                    <div className="col-sm-2 col-md-2">
                        <h4>BMC </h4>
                    </div>
                    <div className="col-sm-2 col-md-2">
                        <h4>SMT </h4>
                    </div>
                    <div className="col-sm-2 col-md-2">
                        <h4>MDCAT </h4>
                    </div>
                    <div className="col-sm-2 col-md-2">
                        <h4>NUMS </h4>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row">
                            
                </div>
            </div>
            </section>

            <section id="comments-section">
                <h2>Customer Feedback</h2>
                <div className="container">
                <div id="comments-carousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                    <li data-target="#my-carousel" data-slide-to="0" className="active"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <p>No Customer Feedback Yet</p>
                        <img alt='empty-user' src={process.env.PUBLIC_URL + "img/blank-profile.png"}></img>
                        <p className="name">No Name</p>
                        <small>Batch XXXX</small>
                        </div>
                    </div>
            
                    <Link className="carousel-control-next" to="#my-carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                    </Link>
                    <Link className="carousel-control-prev" to="#my-carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                    </Link>
                </div>
                </div>
            </section>
            

            <footer>
                <div className="container">
                <div className="social-icon-container">
                    <a href='https://wwww.facebook.com'><i className="fab fa-facebook-f fa-2x"></i></a>
                    <a href='https://wwww.facebook.com'><i className="fab fa-youtube fa-2x"></i></a>
                    <a href='https://wwww.facebook.com'><i className="fab fa-twitter fa-2x"></i></a>
                    <a href='https://wwww.facebook.com'><i className="fab fa-instagram fa-2x"></i></a>
                </div>
                <hr></hr>
                <p>E-learning.com All rights reserved &copy; 2020</p>
                </div>
            </footer>
        </div>
    )
}
