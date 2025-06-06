import React, { Suspense, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import QueryDetailsCard from './QueryDetailsCard';
import axios from 'axios';
import RecommendComment from './RecommendComment';
import Loading from './Loading';

const QueryDetails = () => {
    const data = useLoaderData();
    const [loading, setLoading] = useState(true);
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/getQueryRecommendations?queryID=${data._id}`)
        .then(res => {
            setAllData(res.data);
            setLoading(false);
        })
    }, [])

    if(loading) {
        return (
            <Loading></Loading>
        )
    }

    return (
        <div className='w-11/12 mx-auto my-20'>
            <QueryDetailsCard data={data}></QueryDetailsCard>
            <p className='mt-20 mb-10 font-bold text-3xl text-[#302c78]'>Recommendations For This Query: {data.recommendationCount}</p>
            {
                allData.map((data, index) => <RecommendComment key={index} data={data}></RecommendComment>)
            }
        </div>
    );
};

export default QueryDetails;