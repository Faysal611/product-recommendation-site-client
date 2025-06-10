import React, { useEffect, useState } from 'react';
import useAllContext from '../hooks/useAllContext';
import Loading from './Loading';
import axios from 'axios';
import RecTableRow from './RecTableRow';

const MyRecommendation = () => {
    const { user, loading, firebaseAccessToken } = useAllContext();
    const [allData, setAllData] = useState([]);
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:3000/myRecommendations?email=${user.email}`, {
            headers: {
                Authorization: `Bearer ${firebaseAccessToken}`
            }
        }).then(res => {
            setAllData(res.data)
        })
    }, [refresh])

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="overflow-x-auto w-11/12 mx-auto my-17">
            {
                allData.length === 0 ? <div>
                    <p className='text-center mt-10 mb-6 text-3xl font-bold text-[#302c78]'>You Didn't Recommend Any Product!</p>
                    <img src="empty.svg" alt="empty" className='w-1/3 mx-auto' />
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
                                    <th className='border-2 border-black text-center'>Delete Recommendation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allData.map((data, index) => <RecTableRow key={index} setRefresh={setRefresh} data={data} index={index}></RecTableRow>)
                                }
                            </tbody>
                        </table>
                    </>
            }

        </div>
    );
};

export default MyRecommendation;