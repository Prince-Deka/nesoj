import React, { useState } from "react";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import gallery from "./Gallery.module.css";

function Gallery() {
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
      src: "https://drive.google.com/thumbnail?id=1scfdx4bPqSQyj5-cStssCkPlLJ-Ekr0w&sz=w1000",
      description: "Photo Description 1",
      date: "DD MON YYYY",
    },

    {
      src: "assets/post.JPG",
      description: "Photo Description 2",
      date: "DD MON YYYY",
    },
    {
      src: "assets/post.JPG",
      description: "Photo Description 3",
      date: "12 Apr 2022",
    },
    {
      src: "assets/post.JPG",
      description: "Photo Description 4",
      date: "DD MON YYYY",
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
    }
  ];

  
  const [visibleVideos, setVisibleVideos] = useState(6);
  const loadMoreVideos = () => {
    setVisibleVideos((prevVisibleVideos) =>
    Math.min(prevVisibleVideos + 6, VideoData.length)
  );
};

  const showLessVideos = () => {
    setVisibleVideos(6);
  };

  const VideoData = [
    {
      src: "https://www.youtube.com/embed/SMs0GnYze34?si=ncNq4NdwuE9IlSSG&amp;controls=0",
      description: "Video Description 1",
      date: "DD MON YYYY",
    },
    {
      src: "https://www.youtube.com/embed/qoq8B8ThgEM?si=qxkpTnk_n60hZoVl&amp;controls=0",
      description: "Video Description 2",
      date: "DD MON YYYY",
    },
    {
      src: "https://www.youtube.com/embed/0JLRExeOH-k?si=kn2k6E-2DovNj4o8&amp;controls=0",
      description: "Video Description 3",
      date: "DD MON YYYY",
    },
    {
      src: "https://www.youtube.com/embed/R5CxtjmrIE4?si=4nTnKIrb8xJtkaVg&amp;controls=0",
      description: "Video Description 4",
      date: "DD MON YYYY",
    },
    {
      src: "https://www.youtube.com/embed/R5CxtjmrIE4?si=4nTnKIrb8xJtkaVg&amp;controls=0",
      description: "Video Description 4",
      date: "DD MON YYYY",
    },
    {
      src: "https://www.youtube.com/embed/R5CxtjmrIE4?si=4nTnKIrb8xJtkaVg&amp;controls=0",
      description: "Video Description 4",
      date: "DD MON YYYY",
    },
    {
      src: "https://www.youtube.com/embed/R5CxtjmrIE4?si=4nTnKIrb8xJtkaVg&amp;controls=0",
      description: "Video Description 4",
      date: "DD MON YYYY",
    },
    {
      src: "https://www.youtube.com/embed/R5CxtjmrIE4?si=4nTnKIrb8xJtkaVg&amp;controls=0",
      description: "Video Description 4",
      date: "DD MON YYYY",
    },
    {
      src: "https://www.youtube.com/embed/R5CxtjmrIE4?si=4nTnKIrb8xJtkaVg&amp;controls=0",
      description: "Video Description 4",
      date: "DD MON YYYY",
    },
    {
      src: "https://www.youtube.com/embed/R5CxtjmrIE4?si=4nTnKIrb8xJtkaVg&amp;controls=0",
      description: "Video Description 4",
      date: "DD MON YYYY",
    }
  ]

  const showPopup = () => {
    document.getElementById('popupWindow').style.visibility = 'visible';
  };

  function hidePopup() {
    document.getElementById('popupWindow').style.visibility = 'hidden';
  }

  const [a, setA] = useState('');
const [description, setDescription] = useState('');

const chng = (e, f) => {
  setA(e);
  setDescription(f);
  console.log(e); 
};

  return (
    <div>
      <Navbar />
      <div className={gallery.galleryContainer}>
        <header className={gallery.photosHeader}>PHOTOS</header>
        <div className={gallery.photosContainer}>
          {photoData.slice(0, visiblePhotos).map((photo, index) => (
            <div key={index} className={gallery.photoDiv} onClick={() => { chng(photo.src,photo.description), showPopup() }}>
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
            <button className={gallery.closeBtn} onClick={hidePopup}><i className="fa-solid fa-circle-xmark"></i></button>
            <div className={gallery.popupImage}>
              <img src={a} alt="" />
            </div>
            <div className={gallery.popupDescription}>
      <p>{description}</p>
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

        {/* ------------------ VIDEOS GALLERY ------------- */}

        <header className={gallery.videosHeader}>VIDEOS</header>
        <div className={gallery.videosContainer}>
        {VideoData.slice(0, visibleVideos).map((video, index) => (
          <div className={gallery.videoDiv}>
            <iframe
              src={video.src}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <div className={gallery.videoDesc}>
              <h3 className={gallery.desc}>{video.description}</h3>
              <img
                src="https://www.iplt20.com/assets/images/new-icon-share-gray.svg"
                alt=""
              />
            </div>
            <div className={gallery.publishDate}>
              <h4 className={gallery.date}>{video.date}</h4>
            </div>
          </div>
        ))}
        </div>
        <div className={gallery.btnPhotoDiv}>
          {visibleVideos < VideoData.length && (
            <button onClick={loadMoreVideos} className={gallery.loadMoreBtn}>
              Load More
            </button>
          )}
          {visibleVideos > 6 && (
            <button onClick={showLessVideos} className={gallery.showLessBtn}>
              Show Less
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;