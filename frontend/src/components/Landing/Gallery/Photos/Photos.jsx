import React, { useEffect, useState } from "react";
import gallery from "../Gallery.module.css";

function Photos() {
  const [visiblePhotos, setVisiblePhotos] = useState(8);
  const loadMorePhotos = () => {
    setVisiblePhotos((prevVisiblePhotos) =>
      Math.min(prevVisiblePhotos + 8, photoData.length)
    );
  };

  const showLessPhotos = () => {
    setVisiblePhotos(8);
  };

  const photoData = [
    {
      src: "https://nesoj.blob.core.windows.net/gallery/photos/NESOJMeeting.jpeg",
      description: "Meeting for Sports Week",
      date: "2023-11-12",
    },

    {
      src: "https://nesoj.blob.core.windows.net/gallery/photos/Executives.jpeg",
      description: "Executive Board 2023-24",
      date: "2023-08-13",
    },
    {
      src: "https://nesoj.blob.core.windows.net/gallery/photos/NEDonateBlood.jpeg",
      description: "NE Student Donate Blood",
      date: "2023-09-13",
    },
    {
      src: "https://nesoj.blob.core.windows.net/gallery/photos/OneIndia.jpeg",
      description: "One India Performance",
      date: "2024-05-04",
    },
    {
      src: "assets/post.JPG",
      description: "Photo Description 5",
      date: "DD MON YYYY",
    },
    {
      src: "assets/post.JPG",
      description: "Photo Description 6",
      date: "DD MON YYYY",
    },
    {
      src: "assets/post.JPG",
      description: "Photo Description 7",
      date: "DD MON YYYY",
    },
    {
      src: "assets/post.JPG",
      description: "Photo Description 8",
      date: "DD MON YYYY",
    },
    {
      src: "assets/post.JPG",
      description: "Photo Description 9",
      date: "DD MON YYYY",
    },
    {
      src: "assets/post.JPG",
      description: "Photo Description 10",
      date: "DD MON YYYY",
    },
    {
      src: "assets/post.JPG",
      description: "Photo Description 11",
      date: "DD MON YYYY",
    },
    {
      src: "assets/post.JPG",
      description: "Photo Description 12",
      date: "DD MON YYYY",
    },
    {
      src: "assets/post.JPG",
      description: "Photo Description 13",
      date: "DD MON YYYY",
    },
    {
      src: "assets/post.JPG",
      description: "Photo Description 14",
      date: "DD MON YYYY",
    },
    {
      src: "assets/post.JPG",
      description: "Photo Description 15",
      date: "DD MON YYYY",
    },
    {
      src: "assets/post.JPG",
      description: "Photo Description 16",
      date: "DD MON YYYY",
    },
    {
      src: "assets/post.JPG",
      description: "Photo Description 17",
      date: "DD MON YYYY",
    },
    {
      src: "assets/post.JPG",
      description: "Photo Description 18",
      date: "DD MON YYYY",
    },
    {
      src: "assets/post.JPG",
      description: "Photo Description 19",
      date: "DD MON YYYY",
    },
    {
      src: "assets/post.JPG",
      description: "Photo Description 20",
      date: "DD MON YYYY",
    },
    {
      src: "assets/post.JPG",
      description: "Photo Description 21",
      date: "DD MON YYYY",
    },
  ];

  const showPopup = () => {
    document.getElementById("popupWindow").style.visibility = "visible";
  };

  function hidePopup() {
    document.getElementById("popupWindow").style.visibility = "hidden";
  }

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [popupImage, setPopupImage] = useState(""); // store image URL for popup
  const [popupDescription, setPopupDescription] = useState(""); // store description for popup

  // Function to update popup content based on clicked photo
  const chng = (photo) => {
    setPopupImage(photo.src);
    setPopupDescription(photo.description);
  };

  const viewPrev = () => {
    setCurrentPhotoIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? photoData.length - 1 : newIndex; // Wrap around to last photo
    });
  };

  const viewNext = () => {
    setCurrentPhotoIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex === photoData.length ? 0 : newIndex; // Wrap around to first photo
    });
  };

  // Update popup content on state change
  useEffect(() => {
    const currentPhoto = photoData[currentPhotoIndex];
    if (currentPhoto) {
      // Check if photo exists
      chng(currentPhoto); // Update popup content
    }
  }, [currentPhotoIndex]);

  return (
    <div>
      <header className={gallery.photosHeader}>PHOTOS</header>
      <div className={gallery.photosContainer}>
      {photoData.slice(0, visiblePhotos).map((photo, index) => (
          <div
            key={index}
            className={gallery.photoDiv}
            onClick={() => {
              chng(photo);
              showPopup();
            }}
          >
            <img src={photo.src} alt={photo.description} />
            <div className={gallery.photoDesc}>
              <h3 className={gallery.desc}>{photo.description}</h3>
              <h4 className={gallery.date}>{photo.date}</h4>
            </div>
          </div>
        ))}
      </div>
      <div id="popupWindow" className={gallery.popup}>
        <div className={gallery.popupContent}>
          <button className={gallery.closeBtn} onClick={hidePopup}>
            <i className="fa-solid fa-circle-xmark"></i>
          </button>
          <div className={gallery.popupImage}>
            <div className={gallery.prevPopup} onClick={viewPrev}>
              <i class="fa-solid fa-square-caret-left"></i>
            </div>
            <img src={popupImage} alt="" />
            <div className={gallery.nextPopup} onClick={viewNext}>
              <i class="fa-solid fa-square-caret-right"></i>
            </div>
          </div>
          <div className={gallery.popupDescription}>
            <p>{popupDescription}</p>
            <div className={gallery.socialMediaButtons}>
              <a href="https://facebook.com/sharelink">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://twitter.com/sharelink">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://instagram.com/sharelink">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="">
                <i className="fa-solid fa-link"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={gallery.btnPhotoDiv}>
        {visiblePhotos < photoData.length && (
          <button onClick={loadMorePhotos} className={gallery.loadMoreBtn}>
            Load More
          </button>
        )}
        {visiblePhotos > 8 && (
          <button onClick={showLessPhotos} className={gallery.showLessBtn}>
            Show Less
          </button>
        )}
      </div>
    </div>
  );
}
export default Photos;
