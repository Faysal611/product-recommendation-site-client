import React from 'react';
import { useLoaderData } from 'react-router';
import QueryDetailsCard from './QueryDetailsCard';

const QueryDetails = () => {
    const data = useLoaderData();
    
    return (
        <div className='w-11/12 mx-auto my-20'>
            <QueryDetailsCard data={data}></QueryDetailsCard>
        </div>
    );
};

export default QueryDetails;