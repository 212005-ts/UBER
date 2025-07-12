import React, { useContext, useEffect, useState } from 'react';
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserProtectedWrapper = ({ children }) => {

    const { captain, setCaptain } = useContext(CaptainDataContext);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!token) {
            navigate('/captain-login');
        }
    }, [token, navigate]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            if (response.status === 200) {
                const data = response.data;
                setCaptain(data.captain);
                setIsLoading(false);
            }
        }).catch((error) => {
            console.error("Error fetching captain profile:", error);
            localStorage.removeItem('token');
            navigate('/captain-login');
        });
    }, [token, navigate, setCaptain, setIsLoading]);

    if (isloading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {children}
        </>
    );
};

export default UserProtectedWrapper;
