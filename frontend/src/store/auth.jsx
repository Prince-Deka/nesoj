import React, { createContext, useContext , useEffect, useState} from 'react';
import axios from 'axios';
import { set } from 'zod';

export const AuthContext = createContext();



export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState({});
    const [news, setNews] = useState([]);

    const storeTokenInLs = (serverToken) => {
        setToken(serverToken);
        localStorage.setItem('token', serverToken);
    };

    // Handling Logout Functionality
    const LogoutUser = () => {
        setToken(null);
        localStorage.removeItem('token');
    };


    // JWT AUTHENTICATION - to get currently logged-in user data

    const userAuthentication = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/auth/user', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
    
            if (response.status === 200) {
                const userData = response.data;
                setUser(userData);
            }
        } catch (error) {
            console.log('Error while getting user data', error);
        }
    };


    // to get the news data 
    const getNews = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/data/news');
            console.log(response.data);
            setNews(response.data);
        } catch (error) {
            console.log('Error while getting news data', error);
        }
    };


    useEffect(() => {
        getNews();
        userAuthentication();
    },[]);


    // --------------------------
    return (
        <AuthContext.Provider value={{ storeTokenInLs, LogoutUser, user, news }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return authContextValue;
};

