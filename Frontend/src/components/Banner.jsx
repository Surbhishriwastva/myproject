import React from 'react'
import banner from '../../public/Banner.mp4'
import '../index.css'



function Banner() {
    return (

        <div className="container">
            <div className="hero">
                <video autoPlay loop muted className="video">
                    <source src={banner} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="overlay"></div>
                <div className="content">
                    <div>
                        <h1 className="title">Explore the World with Us:</h1>
                        <p className="paragraph">
                            Whether you want to relax on a beach, hike in the mountains, or explore new cities, we have everything you need.
                        </p>
                        <button className="button">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Banner;

