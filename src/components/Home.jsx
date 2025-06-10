import React from 'react';
import Intro from './Intro';
import { AllContext } from '../ContextProvider';
import HomeQueries from './HomeQueries';
import Carousel from './Carousel';
import Faq from './Faq';

const Home = () => {

    return (
        <div className='w-11/12 mx-auto'>
            <Intro></Intro>
            <Carousel></Carousel>
            <HomeQueries></HomeQueries>
            <Faq></Faq>
        </div>
    );
};

export default Home;