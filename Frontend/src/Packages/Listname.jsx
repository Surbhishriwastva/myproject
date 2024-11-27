import React from 'react';


const ListComponent = () => {
    const trips = [
        { destination: 'Singapore', price: 'INR 42,000' },
        { destination: 'Malaysia', price: 'INR 40,000' },
        { destination: 'Thailand', price: 'INR 35,000' },
        { destination: 'Indonesia', price: 'INR 45,000' },
        { destination: 'Seychelles', price: 'INR 40,000' },
        { destination: 'Qatar', price: 'INR 45,000' },
        { destination: 'United Arab Emirates', price: 'INR 50,000' },
        { destination: 'Hong Kong', price: 'INR 40,000' },
        { destination: 'Sri Lanka', price: 'INR 35,000' },
        { destination: 'Cambodia', price: 'INR 25,000' },
        { destination: 'Vietnam', price: 'INR 40,000' },
        { destination: 'Bhutan', price: 'INR 35,000' },
        { destination: 'Nepal', price: 'INR 25,000' },
        { destination: 'Turkey', price: 'INR 30,000' },
        { destination: 'Kenya', price: 'INR 30,000' },
        { destination: 'Egypt', price: 'INR 40,000' },
        { destination: 'South Korea', price: 'INR 40,000' },
        { destination: 'Myanmar', price: 'INR 35,000' },
        { destination: 'China', price: 'INR 40,000' },
        { destination: 'Taiwan', price: 'INR 40,000' },
        { destination: 'Lebanon', price: 'INR 45,000' },
        { destination: 'Sultanate Of Oman', price: 'INR 30,000' },
        { destination: 'Russia', price: 'INR 45,000' },
        { destination: 'Jordan', price: 'INR 30,000' },
        { destination: 'Paraguay', price: 'INR 45,000' },
        { destination: 'Laos', price: 'INR 30,000' },
        { destination: 'Japan', price: 'INR 65,000' },
        { destination: 'Greece', price: 'INR 50,000' },
        { destination: 'Philippines', price: 'INR 50,000' },
        { destination: 'Nicaragua', price: 'INR 75,000' },
        { destination: 'Bangladesh', price: 'INR 30,000' },
        { destination: 'Bolivia', price: 'INR 75,000' }
    ];

    return (
        <div className=''>
            <h1 className=' ml-44 mt-8 mb-5 text-2xl font-semibold md:text-4xl'>Best Budget Friendly International Trips From India</h1>
            <ul className='ml-32 text-2xl  '>
                {trips.map((trip, index) => (
                    <li key={index}>
                        <strong>{trip.destination}      :   </strong>

                        <span>{trip.price}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListComponent;
