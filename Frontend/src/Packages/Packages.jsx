import React from 'react'
import Navbar from '../components/Navbar'
import Package from '../components/Package'
import Footer from '../components/Footer';
import Collection from './Collection';
import Listname from './Listname';
import Places from './Places';
import Place2 from './Place2';
import Place3 from './Place3';


export default function Packages() {

    return (
        <>
            <Navbar />
            {/* <div className='min-h-screen '> */}
            <Package />

            <div className=' mt-3 mb-5 ml-7 mr-7 bg-white rounded-xl shadow-md overflow-hidden border border-gray-300'>
                <Collection />
                <Listname />
                <Places />
                <Place2 />
                <Place3 />

            </div>

            <Footer />
        </>
    )
}
