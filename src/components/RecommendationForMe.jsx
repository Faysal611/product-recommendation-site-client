import React, { useEffect, useState } from 'react';
import useAllContext from '../hooks/useAllContext';
import Loading from './Loading';
import axios from 'axios';
import RecTableRowForMe from './RecTableRowForMe';

const RecommendationForMe = () => {
    const {user} = useAllContext();
    const [loading, setLoading] = useState(true);
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/recommendationsForMe?email=${user.email}`)
        .then(res => {
            setAllData(res.data);
            setLoading(false);
        })
    }, [])

    if(loading) {
        return(
            <Loading></Loading>
        )
    }

    return (
        <div className="overflow-x-auto w-11/12 mx-auto my-17">
            <table className="table border border-gray-400 border-collapse">
                {/* head */}
                <thead>
                    <tr>
                        <th className='border border-gray-400 text-center'>Count</th>
                        <th className='border border-gray-400 text-center'>Recommendation Title</th>
                        <th className='border border-gray-400 text-center'>Recommended Product Name</th>
                        <th className='border border-gray-400 text-center'>Recommendation Reason</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        allData.map((data, index) => <RecTableRowForMe key={index} data={data} index={index}></RecTableRowForMe>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default RecommendationForMe;