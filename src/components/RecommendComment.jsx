import React from 'react';
import { Link } from 'react-router';

const RecommendComment = ({data}) => {
    return (
        <div className='flex gap-5 p-5 bg-gray-200 my-10 rounded-2xl border border-gray-300 hover:border-gray-600 duration-200'>
            <div className='flex flex-col justify-center'>
                <img className='w-[550px]' src={data.recommendedProductImageURL} alt="image" />
            </div>
            <div className="divider divider-horizontal divider-success"></div>
            <div className='flex flex-col justify-between'>
                <p className='font-medium text-lg text-[#302c78]'><span className='text-2xl font-bold font-["WDXL_Lubrifont_TC"]'>Recommended By:</span> {data.recommender.username}</p>
                <p className='font-medium text-lg text-[#302c78]'><span className='text-2xl font-bold font-["WDXL_Lubrifont_TC"]'>Recommender's Email:</span> {data.recommender.email}</p>
                <p className='font-medium text-lg text-[#302c78]'><span className='text-2xl font-bold font-["WDXL_Lubrifont_TC"]'>Title:</span> {data.recommendationTitle}</p>
                <p className='font-medium text-lg text-[#302c78]'><span className='text-2xl font-bold font-["WDXL_Lubrifont_TC"]'>Product Name:</span> {data.recommendedProductName}</p>
                <p className='font-medium text-lg text-[#302c78]'><span className='text-2xl font-bold font-["WDXL_Lubrifont_TC"] text-red-500'>Recommendation Reason:</span> {data.recommendationReason}</p>

            </div>
            
        </div>
    );
};

export default RecommendComment;