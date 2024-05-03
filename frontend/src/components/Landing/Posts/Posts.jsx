import React, {useState } from 'react';
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import post from "./Post.module.css";
import Popup from './CreatePostPopup/CreatePostPopup'

function Posts() {
  const [showPopup, setShowPopup] = useState(false);
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowPopup(false);
    }
  };

  return (
    <div className={post.outerPost}>
      <Navbar />
      {showPopup && (
        <div className={post.PopupOnPost} onClick={handleOutsideClick}>
          <button className={post.closeButton} onClick={() => setShowPopup(false)}>&#x2715;</button>
          <Popup/>
        </div>
      )}
      <div className={post.postContainer}>
        <div className={post.createPost}>
          <div className={post.firstRowPost}>
            <img src="assets/nesoj.png" alt="" />
            <button className={post.createBtn} onClick={() => setShowPopup(true)}>
              <p>Create a new Post...</p>
              <a href=""><i class="fa-regular fa-image"></i></a>
            </button>
          </div>
        </div>
        <div className={post.postDiv}>
          <div className={post.posterInfo}>
            <img className={post.posterPic} src="assets/nesoj.png" alt="" />
            <div className={post.posterNameAndTime}>
              <h3 className={post.posterName}>Name</h3>
              <h6 className={post.postTime}>
                00:00 <span className={post.AmPm}>PM</span>
                <span className={post.PostDate}>XX/XX/XXXX</span>
              </h6>
            </div>
          </div>
          <div className={post.mainContent}>
            <div className={post.textContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              reiciendis hic reprehenderit nostrum saepe quos dolor quidem
              perspiciatis animi, quisquam illum pariatur adipisci natus
              delectus eius optio qui. Qui, minima neque dolorem quasi nisi
              dicta doloribus maxime quas fugit velit!
            </div>
            <div className={post.imageIfAny}>
              <img src="assets/post.JPG" alt="" />
            </div>
          </div>
        </div>

        <div className={post.postDiv}>
          <div className={post.posterInfo}>
            <img className={post.posterPic} src="assets/nesoj.png" alt="" />
            <div className={post.posterNameAndTime}>
              <h3 className={post.posterName}>Name</h3>
              <h6 className={post.postTime}>
                00:00 <span className={post.AmPm}>PM</span>
                <span className={post.PostDate}>XX/XX/XXXX</span>
              </h6>
            </div>
          </div>
          <div className={post.mainContent}>
            <div className={post.textContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              reiciendis hic reprehenderit nostrum saepe quos dolor quidem
              perspiciatis animi, quisquam illum pariatur adipisci natus
              delectus eius optio qui. Qui, minima neque dolorem quasi nisi
              dicta doloribus maxime quas fugit velit!
            </div>
            <div className={post.imageIfAny}>
              <img src="assets/post.JPG" alt="" />
            </div>
          </div>
        </div>

        <div className={post.postDiv}>
          <div className={post.posterInfo}>
            <img className={post.posterPic} src="assets/nesoj.png" alt="" />
            <div className={post.posterNameAndTime}>
              <h3 className={post.posterName}>Name</h3>
              <h6 className={post.postTime}>
                00:00 <span className={post.AmPm}>PM</span>
                <span className={post.PostDate}>XX/XX/XXXX</span>
              </h6>
            </div>
          </div>
          <div className={post.mainContent}>
            <div className={post.textContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              reiciendis hic reprehenderit nostrum saepe quos dolor quidem
              perspiciatis animi, quisquam illum pariatur adipisci natus
              delectus eius optio qui. Qui, minima neque dolorem quasi nisi
              dicta doloribus maxime quas fugit velit!
            </div>
            <div className={post.imageIfAny}>
              <img src="assets/post.JPG" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Posts;
