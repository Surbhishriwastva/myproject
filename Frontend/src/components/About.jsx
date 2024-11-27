import React from 'react'
import Slider from 'react-slick';

export default function About() {

    const trips = [
        { name: "Paris", image: "https://media.istockphoto.com/id/600691982/photo/friends-running-in-paris.jpg?s=1024x1024&w=is&k=20&c=HJMLmrdptKv3gc_qq3reHTnx08oSOsrtTynLEnx0gZU=" },
        { name: "Vietnam", image: "https://media.istockphoto.com/id/1490902557/photo/carefree-asian-tourist-woman-wearing-non-la-enjoy-sightseeing-in-hoi-an-old-town-vietnam-copy.jpg?s=1024x1024&w=is&k=20&c=KXOVjww69EOlghScSxyMcdNG7yE0rQWR7moHvgmdHOE=" },
        { name: "Cambodia", image: "https://cdn.pixabay.com/photo/2021/05/20/13/12/travel-6268605_1280.jpg" },
        { name: "Thailand", image: "https://cdn.pixabay.com/photo/2021/11/20/05/15/car-6810885_1280.jpg" },
        { name: "Canada", image: "https://cdn.pixabay.com/photo/2017/10/28/07/47/woman-2896389_640.jpg" },
        // Add more trips as needed
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="p-8 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Welcome International Roam!</h1>
            <p className="text-lg text-center mb-8">Welcome to International Roam, your go-to resource for affordable international travel. Our mission is to inspire and empower travelers to explore the world without breaking the bank.</p>

            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg mb-8">At International Roam, we believe that travel should be accessible to everyone. We are dedicated to finding and sharing the best budget travel destinations, tips, and deals to help you make the most of your adventures. Whether you're a seasoned traveler or planning your first trip abroad, we're here to guide you every step of the way.</p>

            <h2 className="text-3xl font-semibold mb-4">Our Recent Trips</h2>
            <div className="mb-8">
                <Slider {...settings}>
                    {trips.map((trip, index) => (
                        <div key={index} className="text-center">
                            <img src={trip.image} alt={trip.name} className="w-full h-64 object-cover mx-auto mb-4" />
                            <h3 className="text-2xl font-semibold">{trip.name}</h3>
                        </div>
                    ))}
                </Slider>
            </div>

            <h2 className="text-3xl font-semibold mb-4">What We Offer</h2>
            <ul className="list-disc list-inside mb-8 text-lg">
                <li>Destination Guides: Comprehensive guides to budget-friendly destinations around the world.</li>
                <li>Travel Tips: Practical advice on how to save money while traveling, from finding cheap flights to budget accommodations.</li>
                <li>Deals & Discounts: Regular updates on the latest travel deals and discounts to help you save even more.</li>
                <li>Community: Join our community of budget travelers to share experiences, tips, and travel stories.</li>
            </ul>

            <h2 className="text-3xl font-semibold mb-4">Testimonials</h2>
            <blockquote className="bg-gray-100 border-l-4 border-gray-500 italic my-8 pl-8 py-4">
                <p className="text-lg">"International Roam has been my go-to site for planning affordable trips. Thanks to their tips, I've managed to travel to places I never thought I could afford." - Sarah L.</p>
            </blockquote>
            <blockquote className="bg-gray-100 border-l-4 border-gray-500 italic my-8 pl-8 py-4">
                <p className="text-lg">"I love the detailed destination guides on International Roam. They provide everything I need to know for a budget-friendly trip." - Mark T.</p>
            </blockquote>

            <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
            <p className="text-lg">We love hearing from our readers! If you have any questions, suggestions, or just want to say hello, feel free to contact us at <a href="mailto:surbhishriwastva@gmail.com" className="text-blue-500 hover:underline">info@surbhishriwastva.comt.com</a>.</p>
        </div>
    )
};





