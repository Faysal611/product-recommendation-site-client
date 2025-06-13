import React, { useEffect, useState } from 'react';
import useAllContext from '../hooks/useAllContext';
import Loading from './Loading';
import axios from 'axios';
import RecTableRowForMe from './RecTableRowForMe';

const RecommendationForMe = () => {
    const {user, firebaseAccessToken} = useAllContext();
    const [loading, setLoading] = useState(true);
    const [allData, setAllData] = useState([]);
    
    useEffect(() => {
        axios.get(`https://product-recommendation-system-serve.vercel.app/recommendationsForMe?email=${user.email}`, {
            headers: {
                Authorization: `Bearer ${firebaseAccessToken}`
            }
        })
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
            {
                allData.length === 0 ? <div>
                    <p className='text-center mt-10 mb-6 text-3xl font-bold text-[#302c78]'>You Didn't Get Any Recommendations Yet!</p>
                    <img src="empty.svg" alt="empty" className='w-1/3 max-sm:w-1/2 mx-auto' />
                </div> :
                    <>
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
                    </>
            }
            
        </div>
    );
};

export default RecommendationForMe;