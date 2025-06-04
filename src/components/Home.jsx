import React, { useContext } from 'react';
import Intro from './Intro';
import { AllContext } from '../ContextProvider';

const Home = () => {
    const {name} = useContext(AllContext)

    return (
        <div className='w-11/12 mx-auto'>
            <Intro></Intro>
            
        </div>
    );
};

export default Home;