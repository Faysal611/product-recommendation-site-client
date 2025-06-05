import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import Card from './Card';

const HomeQueries = () => {
    const [loading, setLoading] = useState(true);
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/getLatest")
        .then((res) => {
            setAllData(res.data)
            setLoading(false)
        })
    }, [])


    return (
        <div className='my-25 w-11/12 mx-auto'>
            <p className='text-4xl font-bold text-[#302c78] mb-10'>Queries Posted Recently</p>
            {loading ? <Loading></Loading> : allData.map((data, index) =><Card key={index} data={data}></Card>)}
        </div>
    );
};

export default HomeQueries;