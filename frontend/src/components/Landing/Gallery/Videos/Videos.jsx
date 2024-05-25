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
      src: "https://nesoj.blob.core.windows.net/gallery/videos/%E2%80%9CHeart%20of…",
      description: "NESOJ Sports Week",
      date: "2024-02-28",
    },
    {
      src: "https://nesoj.blob.core.windows.net/gallery/videos/Representing%20Arun…",
      description: "Arunachal in One World",
      date: "2024-04-18",
    },
    {
      src: "https://nesoj.blob.core.windows.net/gallery/videos/9th%20NESOJ%20SPORT…",
      description: "Champion Assam",
      date: "2024-02-29",
    },
    {
      src: "https://nesoj.blob.core.windows.net/gallery/videos/Immersing%20viewers…",
      description: "Opening Sports Week",
      date: "2024-02-17",
    },
    {
      src: "https://nesoj.blob.core.windows.net/gallery/videos/ManipurCandleMarch.…",
      description: "Manipur Candle March",
      date: "2024-05-02",
    }
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
