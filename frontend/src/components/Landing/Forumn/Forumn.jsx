import React, { useState, useEffect } from 'react';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import forumn from './Forumn.module.css';
function Forumn(){
    const [forumData, setForumData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(10);
    return (
        <div>
            <Navbar />
            <div className={forumn.forumnContainer}>
                <div className={forumn.columnOne}>
                    <header><h1>DISCUSSIONS</h1></header>
                    <div className={forumn.SecRowForumn}>
                        <button className={forumn.NewDiscussionBtn}>NEW DISCUSSION</button>
                        <div className={forumn.NumberSlider}> 1    2   3    4 ... 9 </div>
                    </div>
                    <div className={forumn.thirdRowForumn}>
                        <table>
                        <colgroup>
                            <col className={forumn.TableDiscussion}/> 
                            <col className={forumn.TableReplies}/>  
                            <col className={forumn.TableViews}/>  
                            <col className={forumn.TableRecent}/> 
                        </colgroup>
                            <thead>
                            <tr>
                                <th>DISCUSSION</th>
                                <th>REPLIES</th>
                                <th>VIEWS</th>
                                <th>MOST RECENT</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <h4>Topic Name</h4>
                                        <p>Started by <span>AuthorName</span> on <span>Time Date</span></p>
                                    </td>
                                    <td>15</td>
                                    <td>320</td>
                                    <td>Yesterday</td>
                                </tr>
                                <tr>
                                    <td>
                                        <h4>Topic Name</h4>
                                        <p>Started by <span>AuthorName</span> on <span>Time Date</span></p>
                                    </td>
                                    <td>15</td>
                                    <td>320</td>
                                    <td>Yesterday</td>
                                </tr>
                                <tr>
                                    <td>
                                        <h4>Topic Name</h4>
                                        <p>Started by <span>AuthorName</span> on <span>Time Date</span></p>
                                    </td>
                                    <td>15</td>
                                    <td>320</td>
                                    <td>Yesterday</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={forumn.columnTwo}>
                    This is column Two
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Forumn;