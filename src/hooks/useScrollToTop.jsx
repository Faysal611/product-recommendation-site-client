import React, { useEffect } from 'react';

const useScrollToTop = () => {

    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
    }, [])
};

export default useScrollToTop;