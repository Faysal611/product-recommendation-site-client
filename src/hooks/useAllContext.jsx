import React, { useContext } from 'react';
import { AllContext } from '../ContextProvider';

const useAllContext = () => {
    const data = useContext(AllContext)
    return (
        data
    );
};

export default useAllContext;