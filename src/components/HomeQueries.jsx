import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import Card from './Card';

const HomeQueries = () => {
    const [loading, setLoading] = useState(true);
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        axios.get("https://product-recommendation-system-serve.vercel.app/getLatest")
        .then((res) => {
            setAllData(res.data)
            setLoading(false)
        })
    }, [])


    return (
        <div className='my-34 w-[99%] mx-auto'>
            <p className='text-4xl font-bold text-[#302c78] mb-10'>Queries Posted Recently</p>
            <div className='flex flex-wrap justify-between w-full'>
                {loading ? <Loading></Loading> : allData.map((data, index) => <Card key={index} data={data}></Card>)}
            </div>
        </div>
    );
};

export default HomeQueries;