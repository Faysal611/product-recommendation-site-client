import React from 'react';
import { Link } from 'react-router';
import { Typewriter } from 'react-simple-typewriter';

const Intro = () => {
    return (
        <div className='bg-[linear-gradient(to_right,rgba(255,255,255,0.89),rgba(255,255,255,0.43),rgba(255,255,255,0.89)),url("home-bg.jpg")] bg-cover h-[615px]'>
            <div className='text-center relative top-[30%]'>
                <p className='font-bold text-[55px]'>Welcome to <span className='text-[#15c39a]'>Product</span> <span className='text-[#ffcd69]'>Recommendation </span><span className='text-[#302c78]'>System</span>!</p>
                <p className='font-semibold text-5xl'>Make life easier by <span style={{ color: "#302c78" }}><Typewriter words={['posting queries!', 'getting recommendations!']} loop={false} cursor cursorStyle="_" cursorBlinking={false} typeSpeed={150} deleteSpeed={70}></Typewriter></span></p>
                <Link className='btn mt-12 bg-[#15c39a] w-[250px] text-xl text-white border-b-4 border-b-gray-600 h-[50px]'>Explore</Link>
            </div>
        </div>
    );
};

export default Intro;