import React from 'react';
import errorLottie from "../../public/Error 404.json"
import Lottie from 'lottie-react';
import { Link } from 'react-router';
const Error = () => {
    return (
        <div className='flex items-center flex-col'>
            <Lottie animationData={errorLottie} style={{width: 500}}></Lottie>
            <Link to={"/"} className='btn btn-error relative -left-8'>Go Back To Home Page</Link>
        </div>
    );
};

export default Error;