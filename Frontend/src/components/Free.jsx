import React, { useEffect, useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import axios from 'axios';
import Cards from './Cards';


function Free() {

    const [travel, settravel] = useState([])
    useEffect(() => {
        const getTravel = async () => {
            try {
                const res = await axios.get("http://localhost:4001/travel");

                const data = res.data.filter((data) => data.category === "explore")
                // console.log(data);
                settravel(data);
            } catch (error) {
                console.log(error)
            }
        }
        getTravel();

    }, [])


    //oldd
    var settings = {

        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };






    return (
        <>
            <div className='max-w-screen-2xl container  md:px-20 px-4'>
                <div>
                    <h1 className='font-bold text-4xl pb-5 pt-8  pl-20 text-center'>The 30 Best Places to Travel in 2024</h1>

                    <p className='font-semi-bold text-2xl'>
                        30 Budget International Trips For Your Holiday In 2024 Which Will Cost You Less Than An iPhone!

                    </p>
                </div>
                <div className="slider-container">
                    <Slider {...settings}>
                        {travel.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>

        </>
    )
}

export default Free