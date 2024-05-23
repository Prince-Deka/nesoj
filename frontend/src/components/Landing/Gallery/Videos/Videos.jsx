import React, { useEffect, useState } from "react";
import gallery from "../Gallery.module.css";

function Videos() {
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
  ];
  return (
    <div className={gallery.videosSection}>
      <header className={gallery.videosHeader}>VIDEOS</header>
      <div className={gallery.videosContainer}>
        {VideoData.slice(0, visibleVideos).map((video, index) => (
          <div key={index} className={gallery.videoDiv}>
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
  );
}
export default Videos;
