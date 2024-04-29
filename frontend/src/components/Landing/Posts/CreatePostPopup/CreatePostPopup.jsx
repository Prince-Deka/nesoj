
import React, {useState, useRef} from 'react';
import PStyle from './CreatePostPopup.module.css'

function CreatePostPopup(){
  const [image, setImage] = useState(null);
  const [textAreaHeight, setTextAreaHeight] = useState('330px');
  const imageRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setTextAreaHeight('140px'); // adjust this value as needed
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageLoad = () => {
    if (imageRef.current && imageRef.current.complete) {
      setTextAreaHeight('140px');
    }
  };
  return (
    <div id='popupWindowPost' className={PStyle.outerPostPopup}>
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
            name="" 
            id="" 
            placeholder='Write what you want to share...'
            style={{ height: textAreaHeight }} 
          >
          </textarea>
        </div>
        {image && (
  <div className={PStyle.btnContainer}>
    <button 
    className={PStyle.removeImageButton} 
    onClick={() => {
      setImage(null);
      setTextAreaHeight('330px');
    }}
  >
    <i class="fa-solid fa-square-xmark"></i>
  </button>
  </div>
)}

<div className={PStyle.ThirdRowPost}>
  {!image && (
    <>
      <label htmlFor="inputPostPic"><i className="fa-regular fa-image"></i></label>
      <input type="file" name="" id="inputPostPic" title="" accept='image/*' onChange={handleFileChange} />
    </>
  )}
  {image && (
    <div className={PStyle.imageContainer}>
      <div className={PStyle.imageScrollContainer}>
        <img 
          src={image} 
          alt="Preview" 
          style={{ width: '100%'}}
        />
      </div>
    </div>
  )}
</div>
        <div className={PStyle.FourthRowPost}>
          <button className={PStyle.btnPostPopup}>Post</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostPopup;

