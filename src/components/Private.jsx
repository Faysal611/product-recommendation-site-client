import React from 'react';
import useAllContext from '../hooks/useAllContext';
import Loading from './Loading';
import { useNavigate } from 'react-router';

const Private = ({children}) => {
    const {user, loading} = useAllContext();
    const navigate = useNavigate();

    if(loading) {
        return (
            Loading
        )
    }
    if(!user) {
        navigate("/signup")
    }
    return (
        children
    );
};

export default Private;