import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import post from "./Post.module.css";
import Popup from './CreatePostPopup/CreatePostPopup';
import { useAuth } from '../../../store/auth';

function Posts() {
  const [showPopup, setShowPopup] = useState(false);
  const [posts, setPosts] = useState([]);
  const { user } = useAuth();
  const checkAdmin = user.userData?.isAdmin && user.userData.isAdmin;
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowPopup(false);
    }
  };

  return (
    <div className={post.outerPost}>
      <Navbar />
      { showPopup  && (
        <div className={post.PopupOnPost} onClick={handleOutsideClick}>
          <button className={post.closeButton} onClick={() => setShowPopup(false)}>&#x2715;</button>
          <Popup onClose={() => { setShowPopup(false); fetchPosts(); }} />
        </div>
      )}
      <div className={post.postContainer}>
        {checkAdmin && (<div className={post.createPost}>
          <div className={post.firstRowPost}>
            <img src="assets/nesoj.png" alt="" />
            <button className={post.createBtn} onClick={() => setShowPopup(true)}>
              <p>Create a new Post...</p>
              <a href="#"><i className="fa-regular fa-image"></i></a>
            </button>
          </div>
        </div>)}
        {posts.map((postItem) => (
          <div className={post.postDiv} key={postItem._id}>
            <div className={post.posterInfo}>
              <img className={post.posterPic} src="assets/nesoj.png" alt="" />
              <div className={post.posterNameAndTime}>
                <h3 className={post.posterName}>{postItem.username}</h3>
                <h6 className={post.postTime}>
                  {new Date(postItem.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} <span className={post.AmPm}></span>
                  <span className={post.PostDate}>{new Date(postItem.createdAt).toLocaleDateString()}</span>
                </h6>
              </div>
            </div>
            <div className={post.mainContent}>
              <div className={post.textContent}>
                {postItem.content}
              </div>
              {postItem.image && (
                <div className={post.imageIfAny}>
                  <img src={postItem.image} alt="" /> {/* Adjust the image URL */}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Posts;
