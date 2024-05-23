import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../NavBar/Navbar";
import styles from "./NewsOpen.module.css";
import Footer from "../../Footer/Footer";

function NewsOpen() {
  const location = useLocation();
  const { newsItem } = location.state || {};

  if (!newsItem) {
    return <div>News item not found</div>;
  }

  return (
    <div>
      <Navbar />
      <div className={styles.newsOpenContainer}>
        <div className={styles.backButton}>
          <a href="/news">
            <i className="fa-solid fa-chevron-left"></i>
            <span className={styles.backText}>Back</span>
          </a>
        </div>
        <div className={styles.Headline}>{newsItem.headline}</div>
        <div className={styles.publishShare}>
          <div className={styles.publishDate}>
            <span>Published</span>
            <span className={styles.publishedDate}>{newsItem.publishedDate}</span>
          </div>
          <a href="">
            <div className={styles.shareBtn}>
              <i className="fa-solid fa-share-nodes"></i>
              <div className={styles.shareText}>Share</div>
            </div>
          </a>
        </div>
        <div className={styles.seperator}></div>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <img src={newsItem.img_url} alt="" />
          </div>
          <div
          className={styles.mainItem}
          dangerouslySetInnerHTML={{ __html: newsItem.content }}
        ></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NewsOpen;
