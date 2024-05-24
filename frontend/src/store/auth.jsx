import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { set } from 'zod';

export const AuthContext = createContext();



export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState({});
    const [stateDetails, setStateDetails] = useState({});
    const [forumData, setForumData] = useState([]);
    const [particularForumData, setParticularForumData] = useState({});

    const storeTokenInLs = (serverToken) => {
        setToken(serverToken);
        localStorage.setItem('token', serverToken);
    };

    // Handling Logout Functionality
    const LogoutUser = () => {
        setToken(null);
        setUser({});
        setStateDetails({});
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
                setUser(response.data);
            }
        } catch (error) {
            // console.log('Error while getting user data', error);
        }
    };


    // To get the state details
    const fetchStateDetails = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/data/stateDetails', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                setStateDetails(response.data);
            }
        } catch (error) {
            console.log('Error while getting state details', error);
        }
    };

    // Fetch the discussion topics
    const fetchDiscussions = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/forum/topics', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                setForumData(response.data);
            }
        } catch (error) {
            console.log('Error while getting forum data', error);
        }
    };


    // Fetch the particular discussion topic
    const fetchParticularDiscussion = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3000/api/forum/topics/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                setParticularForumData(response.data);
            }
        } catch (error) {
            console.log('Error while getting that forum data', error);
        }
    };








    useEffect(() => {
        if (token) {
            userAuthentication();
            fetchStateDetails();
            fetchDiscussions();
        }
    }, [token]);
    // --------------------------
    return (
        <AuthContext.Provider value={{ storeTokenInLs, LogoutUser, user, stateDetails, forumData, particularForumData, fetchDiscussions, fetchParticularDiscussion }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return authContextValue;
};
