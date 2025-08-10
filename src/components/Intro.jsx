import React from 'react';
import { Link } from 'react-router';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'motion/react';

const Intro = () => {
    return (
        <div className='intro-bg h-[625px] max-sm:h-[315px]'>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className='text-center relative top-[30%] max-sm:top-[10%]'>
                <p className='font-bold text-[55px] max-sm:text-3xl'>Welcome to <span className='text-[#15c39a]'>Product</span> <span className='text-[#febf33]'>Recommendation </span><span className='text-[#302c78]'>Hub</span>!</p>
                <p className='font-semibold text-5xl max-sm:text-2xl static'>Make shopping easier by <span style={{ color: "#302c78", minWidth: "450px", display: "inline-block" }}><Typewriter words={['posting queries!', 'getting recommendations!']} loop={false} cursor cursorStyle="_" cursorBlinking={false} typeSpeed={60} deleteSpeed={35}></Typewriter></span></p>
                <Link className='btn mt-6 bg-[#15c39a] w-[250px] max-sm:w-[190px] text-xl text-white border-b-4 border-b-gray-600 h-[50px]'>Explore</Link>
            </motion.div>
            
        </div>
    );
};

export default Intro;