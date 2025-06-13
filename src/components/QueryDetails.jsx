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
    const [refresh, setRefresh] = useState(true);
    const [recCount, setRecCount] = useState(allData.length);

    useEffect(() => {
        axios.get(`https://product-recommendation-system-serve.vercel.app/getQueryRecommendations?queryID=${data._id}`)
        .then(res => {
            setAllData(res.data);
            setRecCount(res.data.length);
            setLoading(false);
        })
    }, [refresh])

    if(loading) {
        return (
            <Loading></Loading>
        )
    }

    return (
        <div className='w-11/12 mx-auto my-20'>
            <QueryDetailsCard setRefresh={setRefresh} data={data}></QueryDetailsCard>
            <p className='mt-20 mb-10 font-bold text-3xl text-[#302c78]'>Recommendations For This Query: {recCount}</p>
            {
                allData.map((data, index) => <RecommendComment key={index} data={data}></RecommendComment>)
            }
        </div>
    );
};

export default QueryDetails;