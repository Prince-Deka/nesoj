import React, { createContext, useContext , useEffect, useState} from 'react';
import axios from 'axios';
import { set } from 'zod';

export const AuthContext = createContext();



export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState({});

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
              setUser(response.data);
            }
          } catch (error) {
            // console.log('Error while getting user data', error);
        }
    };


    


   


    useEffect(() => {
        if (token) { // Only authenticate if there's a token
            userAuthentication();
        }
      }, [token]); // Re-run effect when token changes
    


    // --------------------------
    return (
        <AuthContext.Provider value={{ storeTokenInLs, LogoutUser, user }}>
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

