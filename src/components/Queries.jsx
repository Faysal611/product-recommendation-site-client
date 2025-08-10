import React, { useEffect, useState } from 'react';
import QueriesCard from './QueriesCard';
import Loading from './Loading';
import axios from 'axios';
import useScrollToTop from '../hooks/useScrollToTop';

const Queries = () => {
    const [initialData, setInitialData] = useState([]);
    const [allData, setAllData] = useState(initialData);
    const [inputData, setInputData] = useState("");
    const [oneCol, setOneCol] = useState(false);
    const [twoCol, setTwoCol] = useState(false);
    const [threeCol, setThreeCol] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    useScrollToTop();

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get("https://product-recommendation-system-serve.vercel.app/queries")
            setInitialData(data);
            setAllData(data);
            setIsLoading(false);
        }
        
        getData();
    }, [])

    const handleType = e => {
        setInputData(e.target.value.toLowerCase())
    }

    if(isLoading) return <Loading></Loading>


    const handleSearch = () => {
        setAllData(() => {
            const newData = initialData.filter(data => {
                const arr = data.productName.toLowerCase().split(" ");
                for (const str of arr) {
                    if (str.includes(inputData)) {
                        return true;
                    }
                }
            });
            return newData;
        })
    }

    const handleEnter = e => {
        if (e.key === "Enter") {
            handleSearch();
        }
    }

    const handleOneCol = () => {
        setOneCol(true);
        setTwoCol(false);
        setThreeCol(false);
    }

    const handleTwoCol = () => {
        setTwoCol(true);
        setOneCol(false);
        setThreeCol(false);
    }

    const handleThreeCol = () => {
        setThreeCol(true);
        setOneCol(false);
        setTwoCol(false);
    }

    return (
        <div className='w-11/12 mx-auto mt-12 mb-15'>
            <div className='flex justify-between max-sm:flex-col max-sm:items-center max-sm:gap-6'>
                <p className='text-3xl font-bold text-[#302c78] max-sm:text-xl'>All Queries</p>
                <div className='flex gap-1 max-sm:gap-3 items-center max-sm:flex-col max-sm:items-end'>
                    <div className='flex gap-1'>
                        <input onKeyDown={handleEnter} onChange={handleType} type="email" className="input w-full focus:outline-2 focus:outline-offset-0 focus:outline-[#302c78] duration-100 ease-in-out" placeholder="Search" />
                        <button onClick={handleSearch} className='btn bg-[#ffcd69] text-[#302c78] active:bg-[#302c78] active:text-[#ffcd69]'>Search</button>
                    </div>
                    <div className='flex gap-5'>
                        <div className='flex items-center gap-3 ml-4 w-[140px] border-2 border-[#302c78] bg-[#302c78] px-4 py-1 pr-4 rounded-3xl'>
                            <div onClick={handleOneCol} className={`opacity-15 ${oneCol ? "opacity-100" : "hover:opacity-45"} duration-250 cursor-pointer`}><img className='w-[85px]' src="one-col.svg" /></div>
                            <div onClick={handleTwoCol} className={`opacity-15 ${twoCol ? "opacity-100" : "hover:opacity-45"} duration-250 cursor-pointer`}><img className='w-[80px]' src="two-col.svg" /></div>
                            <div onClick={handleThreeCol} className={`opacity-15 ${threeCol ? "opacity-100" : "hover:opacity-45"} duration-250 cursor-pointer`}><img className='w-[75px]' src="three-col.svg" /></div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={`grid ${oneCol ? "grid-cols-1" : twoCol ? "grid-cols-2 gap-5" : "grid-cols-3 gap-5"}`}>
                {

                    allData.map((data, index) => <QueriesCard oneCol={oneCol} twoCol={twoCol} threeCol={threeCol} key={index} data={data}></QueriesCard>)
                }
            </div>
        </div>
    );
};

export default Queries;