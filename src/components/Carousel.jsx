import React from 'react';
import { Link } from 'react-router';

const Carousel = () => {
    return (
        <>
            <p className='text-4xl font-bold mt-24 mb-5'>Ask And Get <span className='text-[#15c39a]'>Recommendations</span></p>
            <div className="carousel w-full rounded-xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={"/first.jpg"}
                        className="w-full h-[430px] object-cover object-top" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <p className='absolute top-[120px] left-[110px] font-semibold text-2xl'>Confused About What to Buy?</p>
                    <p className='absolute top-[70px] right-[110px] font-semibold text-2xl'>Confused About Product Quality?</p>
                    <p className='absolute top-[240px] right-[70px] font-semibold text-2xl'>Confused About Longevity?</p>
                    <p className='absolute top-[260px] left-[80px] font-semibold text-2xl'>Need Better suggestions?</p>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={"/second.jpg"}
                        className="w-full h-[430px] object-cover object-[0%_35%]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <p className='text-3xl absolute top-[110px] left-[100px]'><span className='font-semibold text-4xl'>We Got You Covered!</span><br></br>With Our suggestions, You Can shop Tension Free</p>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={"/third.jpg"}
                        className="w-full h-[430px] object-cover" />
                    <div className="absolute z-10 left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                    <div className='w-full h-[430px] bg-[#0000006c] absolute'></div>
                    <p className='absolute text-white text-4xl font-bold left-[380px] top-[210px]'>Shop Tension Free! <Link className='underline underline-offset-5 mx-5 text-[#15c39a]' to={"/signup"}>Sign Up Now</Link></p>
                </div>
            </div>
        </>
    );
};

export default Carousel;