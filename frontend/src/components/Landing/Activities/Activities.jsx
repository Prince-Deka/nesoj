import React from 'react'
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'
import style from './Activity.module.css'

function Activities() {
  return (
    <div>
        <Navbar/>
          <div className={style.containerActivity}>
            <div className={style.rowOne}>
              <div className="recentActivityTitle titleActivity" style={{top: "260px", left: "90px"}}>
                <i class="fa-solid fa-timeline"></i>Recent Activities
              </div>
              <div className={style.recentActivity}>
                
              </div>
              <div className="recentActivityTitle titleActivity" style={{top: "260px", left: "790px"}}>
                <i class="fa-solid fa-calendar-days"></i>Upcoming Activities
              </div>
              <div className={style.upcomingActivity}>

              </div>
          </div>
          <div className={`${style.rowTwo} ${style.gridContainer}`}>
            <div className={style.gridItem}>Item 1</div>
            <div className={style.gridItem}>Item 2</div>
            <div className={style.gridItem}>Item 3</div>
            <div className={style.gridItem}>Item 4</div>
            <div className={style.gridItem}>Item 5</div>
            <div className={style.gridItem}>Item 6</div>

          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Activities