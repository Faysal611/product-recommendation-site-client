import React from 'react';
import { Link } from 'react-router';

const Card = ({data}) => {

    return (
        <div className='flex max-sm:flex-col gap-5 max-sm:gap-0 p-5 bg-gray-200 my-10 rounded-2xl border border-gray-300 hover:border-gray-600 duration-200'>
            <div className='flex flex-col justify-center'>
                <img className='w-[550px]' src={data.productPhotoURL} alt="image" />
            </div>
            <div className="divider divider-horizontal divider-success max-sm:hidden"></div>
            <div className="divider hidden max-sm:flex divider-success"></div>
            <div className='flex flex-col justify-between'>
                <p className='font-medium text-lg text-[#302c78]'><span className='text-2xl font-bold font-["WDXL_Lubrifont_TC"]'>Title:</span> {data.queryTitle}</p>
                <p className='font-medium text-lg text-[#302c78]'><span className='text-2xl font-bold font-["WDXL_Lubrifont_TC"]'>Product Name:</span> {data.productName}</p>
                <p className='font-medium text-lg text-[#302c78]'><span className='text-2xl font-bold font-["WDXL_Lubrifont_TC"]'>Brand:</span> {data.productBrand}</p>
                <p className='font-medium text-lg text-[#302c78]'><span className='text-2xl font-bold font-["WDXL_Lubrifont_TC"] text-red-500'>Boycott Reason:</span> {data.boycottingReason}</p>
                
            </div>
            <div className="divider divider-horizontal divider-success max-sm:hidden"></div>
            <div className="divider divider-success hidden max-sm:flex"></div>
            <div className='flex flex-col justify-around'>
                <Link to={`/queryDetails/${data._id}`}><button className="btn w-max text-white bg-[#15c39a]">View Details</button></Link>
            </div>
        </div>
    );
};

export default Card;