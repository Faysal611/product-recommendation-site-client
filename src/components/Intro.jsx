import React from 'react';
import { Link } from 'react-router';
import { Typewriter } from 'react-simple-typewriter';

const Intro = () => {
    return (
        <div className='intro-bg h-[615px] max-sm:h-[315px]'>
            <div className='text-center relative top-[30%] max-sm:top-[10%]'>
                <p className='font-bold text-[55px] max-sm:text-3xl'>Welcome to <span className='text-[#15c39a]'>Product</span> <span className='text-[#ffcd69]'>Recommendation </span><span className='text-[#302c78]'>System</span>!</p>
                <p className='font-semibold text-5xl max-sm:text-2xl'>Make life easier by <span style={{ color: "#302c78" }}><Typewriter words={['posting queries!', 'getting recommendations!']} loop={false} cursor cursorStyle="_" cursorBlinking={false} typeSpeed={150} deleteSpeed={60}></Typewriter></span></p>
                <Link className='btn mt-6 bg-[#15c39a] w-[250px] max-sm:w-[190px] text-xl text-white border-b-4 border-b-gray-600 h-[50px]'>Explore</Link>
            </div>
        </div>
    );
};

export default Intro;