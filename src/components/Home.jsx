import React from 'react';
import Intro from './Intro';
import { AllContext } from '../ContextProvider';
import HomeQueries from './HomeQueries';
import Carousel from './Carousel';
import Faq from './Faq';
import useScrollToTop from '../hooks/useScrollToTop';
import NewsLetter from './NewsLetter';
import UseSetTitle from '../hooks/UseSetTitle';

const Home = () => {
    useScrollToTop();
    UseSetTitle("Home");
    return (
        <div className='w-11/12 mx-auto'>
            <Intro></Intro>
            <Carousel></Carousel>
            <HomeQueries></HomeQueries>
            <NewsLetter></NewsLetter>
            <Faq></Faq>
        </div>
    );
};

export default Home;