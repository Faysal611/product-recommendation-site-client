import React from 'react';
import Intro from './Intro';
import { AllContext } from '../ContextProvider';
import HomeQueries from './HomeQueries';

const Home = () => {

    return (
        <div className='w-11/12 mx-auto'>
            <Intro></Intro>
            <HomeQueries></HomeQueries>
        </div>
    );
};

export default Home;