import React,{useState, useEffect} from "react";
import Navbar from "../NavBar/Navbar";
import styles from "./News.module.css";
import Footer from "../Footer/Footer";
import axios from 'axios';

function News() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/data/news');
        setNewsData(response.data);
        console.log(newsData);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);
  return (
    <>
    <Navbar />
      <div className={styles.newsContainer}>
        <header className={styles.latestNews}>LATEST NEWS</header>
        <div className={styles.latestNewsContainer}>
          {newsData.length > 0 && (
            <div className={styles.mainNews}>
              <div className={styles.mainNewsImgContainer}>
                <img src={newsData[0].img_url || "assets/background.jpg"} alt="" />
              </div>
              <div className={styles.mainArticle}>
                  <div className={styles.MainHeadline}>{newsData[0].headline}</div>
              </div>
            </div>
          )}
          {newsData.slice(1).map((item) => (
            <div key={item.id} className={styles.otherNews}>
              <div className={styles.otherNewsImgContainer}>
                <img src={item.img_url || "assets/background.jpg"} alt="" />
              </div>
              <div className={styles.otherArticle}>
                  <div className={styles.otherHeadline}>{item.headline}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default News;
