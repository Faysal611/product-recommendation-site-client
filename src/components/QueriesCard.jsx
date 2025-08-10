import React from 'react';
import { Link } from 'react-router';

const QueriesCard = ({data, twoCol, threeCol}) => {
    return (
        <div className={`flex max-sm:gap-2 max-sm:flex-col ${twoCol || threeCol ? "flex-col" : ""}  p-5 bg-gray-200 my-10 rounded-2xl border border-gray-300 hover:border-gray-600 duration-200`}>
            <div className='flex flex-col justify-center items-center'>
                <img className={`${twoCol ? "w-[650px] h-[360px]" : "w-[550px] h-[250px]"} object-cover rounded-xl`} src={data.productPhotoURL} alt="image" />
            </div>
            {
                twoCol || threeCol ? <div className="divider divider-success"></div> : <div className="divider divider-horizontal divider-success"></div>
            }
            <div className='flex flex-col justify-between'>
                <p className='font-medium text-lg text-[#302c78]'><span className='text-2xl font-bold font-["WDXL_Lubrifont_TC"]'>Title:</span> {data.queryTitle}</p>
                <p className='font-medium text-lg text-[#302c78]'><span className='text-2xl font-bold font-["WDXL_Lubrifont_TC"]'>Product Name:</span> {data.productName}</p>
                <p className='font-medium text-lg text-[#302c78]'><span className='text-2xl font-bold font-["WDXL_Lubrifont_TC"]'>Brand:</span> {data.productBrand}</p>
                <p className='font-medium text-lg text-[#302c78]'><span className='text-2xl font-bold font-["WDXL_Lubrifont_TC"] text-red-500'>Query:</span> {data.boycottingReason}</p>

            </div>
            {
                twoCol || threeCol ? <div className="divider divider-success"></div> : <div className="divider divider-horizontal divider-success"></div>
            }
            <div className='flex flex-col justify-around'>
                <Link to={`/queryDetails/${data._id}`}><button className="btn w-max text-white bg-[#15c39a]">Recommend</button></Link>
            </div>
        </div>
    );
};

export default QueriesCard;