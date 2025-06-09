import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import useAllContext from '../hooks/useAllContext';
import Loading from './Loading';
import MyQuriesCard from './MyQueriesCard';

const MyQueries = () => {
    const {user, firebaseAccessToken} = useAllContext();
    const [loading, setLoading] = useState(true);
    const [allData, setAllData] = useState([]);
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:3000/myQuries?email=${user.email}`, {
            headers: {
                Authorization: `Bearer ${firebaseAccessToken}`
            }
        })
        .then(res => {
            setAllData(res.data);
            setLoading(false);
        })
    }, [refresh])

    if(loading) {
        return (
            <Loading></Loading>
        )
    }

    return (
        <div className='w-11/12 mx-auto mt-10 mb-20'>
            <Link to={"/addQuery"}><button className=' py-2 rounded-xl font-semibold cursor-pointer active:-bottom-[1px] duration-100 w-[200px] relative left-1/2 -translate-x-1/2 bg-[#15c39a]'>+ Add Query</button></Link>
            

            {
                allData.length === 0 ? <div>
                    <p className='text-center mt-10 mb-6 text-3xl font-bold text-[#302c78]'>No Queries Found</p>
                    <img src="empty.svg" alt="empty" className='w-1/3 mx-auto' />
                </div> : 
                    <>
                        <p className='text-center mt-10 mb-6 text-4xl font-bold text-[#302c78]'>Queries Added by You</p>
                        {allData.map((data, index) =><MyQuriesCard key={index} data={data} setRefresh={setRefresh}></MyQuriesCard>)}
                    </>
            }
        </div>
    );
};

export default MyQueries;