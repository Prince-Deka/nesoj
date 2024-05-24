import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

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

    const LogoutUser = () => {
        setToken(null);
        setUser({});
        setStateDetails({});
        localStorage.removeItem('token');
    };

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
            console.log('Error while getting user data', error);
        }
    };

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

    const fetchParticularDiscussion = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3000/api/forum/topics/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                // Increment view count directly in the same API call
                await incrementViewCount(id);
                setParticularForumData(response.data);
            }
        } catch (error) {
            console.log('Error while getting that forum data', error);
        }
    };

    const incrementViewCount = async (id) => {
        try {
            await axios.post(`http://localhost:3000/api/forum/topics/${id}/view`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            fetchDiscussions(); // Refresh the forum data to update the view count
        } catch (error) {
            console.error("Error incrementing view count:", error);
        }
    };

    const submitReply = async (content, topicId) => {
        try {
            const response = await axios.post('http://localhost:3000/api/forum/replies', 
                { content, topicId }, 
                { headers: { Authorization: `Bearer ${token}` } }
            );
            if (response.status === 201) {
                fetchParticularDiscussion(topicId); // Refresh the topic data after a successful reply submission
                fetchDiscussions(); // Refresh the discussions list to update reply count
            }
        } catch (error) {
            console.error('Error submitting reply:', error);
        }
    };

    const submitNewDiscussion = async (formData) => {
        if (!token) {
            throw new Error('Unauthorized: No token provided');
        }
        try {
            const response = await axios.post('http://localhost:3000/api/forum/topics', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.status === 201) {
                fetchDiscussions(); // Refresh the discussions list after submitting a new discussion
                return response.data;
            } else {
                throw new Error('Failed to create new discussion');
            }
        } catch (error) {
            console.error('Error submitting new discussion:', error);
            throw error;
        }
    };

    useEffect(() => {
        if (token) { // Only authenticate if there's a token
            userAuthentication();
            fetchStateDetails();
            fetchDiscussions();
        }
    }, [token]); // Re-run effect when token changes

    return (
        <AuthContext.Provider value={{ 
            storeTokenInLs, 
            LogoutUser, 
            user, 
            stateDetails, 
            forumData, 
            particularForumData, 
            fetchDiscussions, 
            fetchParticularDiscussion, 
            submitReply,
            submitNewDiscussion,
            token // Ensure token is available in the context
        }}>
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
