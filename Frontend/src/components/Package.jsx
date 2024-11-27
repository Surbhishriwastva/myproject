import React, { useEffect, useState } from 'react'
import Cards from './Cards';

import axios from "axios"
import { Link } from "react-router-dom"

export default function Package() {

    const [travel, settravel] = useState([])
    useEffect(() => {
        const getTravel = async () => {
            try {
                const res = await axios.get("http://localhost:4001/travel");
                console.log(res.data);
                settravel(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getTravel();

    }, [])


    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  '>

                <div className='mt-28 items-center justify-center text-center'>

                    <h1 className='text-2xl font-semibold md:text-4xl'>We're delighted to have you{" "}
                        <span className='text-pink-500'> Here! :)</span>
                    </h1>
                    <p className='mt-12'>
                        Below is a list of 32 budget international trips under 50k that’ll cost you less than an iPhone. Keep scrolling down and pick a spot for your next best international trips from India. If you carefully plan your vacation in advance, you could save some bucks and the entire cost of the trip will come out to be cheaper.
                    </p>
                    <Link to="/">

                        <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700'>
                            Back
                        </button>
                    </Link>
                </div>
                {/* for shoawing the same i.e on the main page */}
                {/* <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>

                    {travel.map((item) => (
                        <Cards key={item.id} item={item} />
                    ))}


                </div> */}
            </div>

        </>
    )
}
