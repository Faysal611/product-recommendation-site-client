import React from 'react';
import email from "../../public/Email.json";
import Lottie from 'lottie-react';

const NewsLetter = () => {
    return (
        <div className='flex flex-col items-center bg-gray-100 rounded-2xl'>
            <Lottie style={{width: 300}} animationData={email} loop={true}></Lottie>
            <h1 className='text-3xl font-bold text-gray-800'>Subscribe Newsletter</h1>
            <h2 className='font-gray-400 w-1/3 text-center'>Never miss our latest updates, podcasts etc. Our newsletter is once a week, every Friday. </h2>
            <div className='mt-3'>
                <input className='bg-white outline outline-gray-300 w-[400px] h-[50px] focus:outline-[#15c39a] text-xl placeholder:text-gray-400 rounded-tl-3xl rounded-bl-3xl pl-6 placeholder:text-xl' placeholder='user@email.com' type="text" />
                <button className='h-[50px] px-4 bg-[#15c39a] rounded-br-3xl cursor-pointer rounded-tr-3xl text-white font-semibold'>Subscribe</button>
            </div>
            <p className='text-gray-500 text-xl mb-10 mt-4'>We promise not to spam you!</p>
        </div>
    );
};

export default NewsLetter;