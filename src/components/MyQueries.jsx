import React from 'react';
import { Link } from 'react-router';

const MyQueries = () => {

    return (
        <div className='w-11/12 mx-auto mt-10 mb-20'>
            <Link to={"/addQuery"}><button className=' py-2 rounded-xl font-semibold cursor-pointer active:-bottom-[1px] duration-100 w-[200px] relative left-1/2 -translate-x-1/2 bg-[#15c39a]'>+ Add Query</button></Link>
            <p className='text-center mt-10 text-4xl font-bold text-[#302c78]'>Queries Added by You</p>
        </div>
    );
};

export default MyQueries;