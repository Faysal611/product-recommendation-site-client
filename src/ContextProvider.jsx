import React, { createContext } from 'react';

export const AllContext = createContext();

const ContextProvider = ({children}) => {
    const obj = {
        name: "Faysal"
    }

    return (
        <AllContext value={obj}>
            {children}
        </AllContext>
    );
};

export default ContextProvider;