import React from "react";
import Navbar from "../NavBar/Navbar";
import styles from './News.module.css'
import Footer from '../Footer/Footer'

function News() {
  return (
    <div>
      <Navbar />
      <div className={`${styles.container} ${styles.newsOuter}`}>
        <div className={styles.firstElement}>
          <img src="/assets/background.jpg" alt="" />
          <div className={styles.headlineFirst}>Assam are the co-champions with Sikkim of NESOJ Sports Week 2023-24</div>
        </div>
        <div className={styles.secondElement}>
          <img src="/assets/background.jpg" alt="" />
          <div className={styles.headlineFirst}>Assam are the co-champions with Sikkim of NESOJ Sports Week 2023-24</div>
        </div>
        <div className={styles.thirdElement}>
          <img src="/assets/background.jpg" alt="" />
          <div className={styles.headlineFirst}>Assam are the co-champions with Sikkim of NESOJ Sports Week 2023-24</div>
        </div>
        <div className={`${styles.fourthElement} ${styles.restElements}`}>
        <img src="/assets/background.jpg" alt="" />
          <div className={styles.headlineFirst}>Assam are the co-champions with Sikkim of NESOJ Sports Week 2023-24</div>
        </div>
        <div className={`${styles.fifthElement} ${styles.restElements}`}>
        <img src="/assets/background.jpg" alt="" />
          <div className={styles.headlineFirst}>Assam are the co-champions with Sikkim of NESOJ Sports Week 2023-24</div>
        </div>
        <div className={`${styles.sixthElement} ${styles.restElements}`}>
          <img src="/assets/background.jpg" alt="" />
          <div className={styles.headlineFirst}>Assam are the co-champions with Sikkim of NESOJ Sports Week 2023-24</div>
        </div> 
      </div>
      <Footer/>
    </div>
  );
}

export default News;
