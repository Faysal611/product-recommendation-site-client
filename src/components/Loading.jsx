import React from 'react';
import loadingAnimation from "../../public/Loading.json";
import Lottie from 'lottie-react';

const Loading = () => {
    return (
        <div className='flex justify-center mb-[230px] mt-[200px]'>
            <div className='w-[200px] h-[200px]'>
                <Lottie animationData={loadingAnimation} loop={true} ></Lottie>
            </div>
        </div>
    );
};

export default Loading;