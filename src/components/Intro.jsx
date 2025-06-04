import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Intro = () => {
    return (
        <div className='bg-[linear-gradient(to_right,rgba(255,255,255,0.89),rgba(255,255,255,0.43),rgba(255,255,255,0.89)),url("home-bg.jpg")] bg-cover h-[610px]'>
            <div className='text-center relative top-1/3'>
                <p className='font-bold text-[55px]'>Welcome to <span className='text-[#15c39a]'>Product</span> <span className='text-[#ffcd69]'>Recommendation System</span>!</p>
                <p className='font-semibold text-5xl'>Make life easier by <span style={{ color: "#302c78" }}><Typewriter words={['posting queries!', 'getting recommendations!']} loop={false} cursor cursorStyle="_" cursorBlinking={false} typeSpeed={150} deleteSpeed={150}></Typewriter></span></p>
            </div>
        </div>
    );
};

export default Intro;