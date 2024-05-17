import React, { useState, useRef, useEffect, useCallback } from 'react';
import axios from 'axios';
import PStyle from './CreatePostPopup.module.css';
import { toast } from 'react-toastify';

function CreatePostPopup({ onClose }) {
  const [image, setImage] = useState(null);
  const [imageLoad, setImageLoad] = useState(null);
  const [textAreaHeight, setTextAreaHeight] = useState('330px');
  const [content, setContent] = useState('');
  const imageRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImageLoad(file);
    if (file) {
      setImage(URL.createObjectURL(file)); // Show the image preview
      setTextAreaHeight('140px');
    }
  };

  const handleImageLoad = () => {
    if (imageRef.current && imageRef.current.complete) {
      setTextAreaHeight('140px');
    }
  };

  const handlePost = useCallback(async () => {
    try {
      const formData = new FormData();
      const username = 'YourUsername'; // Replace with actual username
      formData.append('username', username);
      formData.append('content', content);
      if (imageLoad) {
        // Generate new file name
        const date = new Date().toISOString().split('T')[0];
        const newFileName = `${username}_${date}${imageLoad.name.substring(imageLoad.name.lastIndexOf('.'))}`;
        
        // Create a new file with the new name
        const renamedFile = new File([imageLoad], newFileName, { type: imageLoad.type });

        // Append the renamed file to the FormData
        console.log('Renamed file:', renamedFile);
        formData.append('image', renamedFile);
      }

      const response = await axios.post('http://localhost:3000/api/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 201) {
        toast.success('Successfully created post!');
        if (onClose) {
          onClose();
        } else {
          console.error('onClose function is not defined');
        }
      }
    } catch (error) {
      console.error('Failed to create post', error);
    }
  }, [content, onClose, imageLoad]);

  return (
    <div id="popupWindowPost" className={PStyle.outerPostPopup}>
      <div className={PStyle.popupWindow}>
        <div className={PStyle.topRowPopup}>
          <div className={PStyle.IMG}>
            <img src="assets/nesoj.png" alt="" />
          </div>
          <div className={PStyle.PosterName}>
            Northeast Students' Organization Jalandhar
          </div>
        </div>
        <div className={PStyle.textArea}>
          <textarea
            placeholder="Write what you want to share..."
            style={{ height: textAreaHeight }}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        {image && (
          <div className={PStyle.btnContainer}>
            <button
              className={PStyle.removeImageButton}
              onClick={() => {
                setImage(null);
                setTextAreaHeight('330px');
                setImageLoad(null);
              }}
            >
              <i className="fa-solid fa-square-xmark"></i>
            </button>
          </div>
        )}
        <div className={PStyle.ThirdRowPost}>
          {!image && (
            <>
              <label htmlFor="inputPostPic"><i className="fa-regular fa-image"></i></label>
              <input
                type="file"
                id="inputPostPic"
                accept="image/*"
                onChange={handleFileChange}
              />
            </>
          )}
          {image && (
            <div className={PStyle.imageContainer}>
              <div className={PStyle.imageScrollContainer}>
                <img
                  src={image}
                  alt="Preview"
                  style={{ width: '100%' }}
                  ref={imageRef}
                  onLoad={handleImageLoad}
                />
              </div>
            </div>
          )}
        </div>
        <div className={PStyle.FourthRowPost}>
          <button className={PStyle.btnPostPopup} onClick={handlePost}>Post</button>
        </div>
      </div>
    </div>
  );
}

export default CreatePostPopup;
