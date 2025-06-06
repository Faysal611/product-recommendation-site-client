import React from 'react';
import Navbar from './Navbar';
import { useLoaderData } from 'react-router';
import QueriesCard from './QueriesCard';

const Queries = () => {
    const allData = useLoaderData();

    return (
        <div className='w-11/12 mx-auto mt-17 mb-15'>
            <p className='text-3xl font-bold text-[#302c78]'>All Queries</p>
            {
                allData.map((data, index) => <QueriesCard key={index} data={data}></QueriesCard>)
            }
        </div>
    );
};

export default Queries;