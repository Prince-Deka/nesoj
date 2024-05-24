import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import NewDiscussion from "./NewDiscussion/NewDiscussion";
import { useAuth } from "../../../store/auth";
import forumn from "./Forumn.module.css";

function Forumn() {
  const { forumData, fetchDiscussions, fetchParticularDiscussion, token } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [isNewDiscussionOpen, setIsNewDiscussionOpen] = useState(false);
  const navigate = useNavigate();

  const handleNewDiscussionClick = () => {
    setIsNewDiscussionOpen(true);
  };

  const handleCloseDiscussion = () => {
    setIsNewDiscussionOpen(false);
    fetchDiscussions();
  };

  const handleOpenDiscussion = async (id) => {
    await fetchParticularDiscussion(id);
    navigate(`/discussions/${id}`);
  };

  const indexOfLastPost = currentPage * rowsPerPage;
  const indexOfFirstPost = indexOfLastPost - rowsPerPage;
  const currentPosts = forumData.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      <Navbar />
      <div className={forumn.forumnContainer}>
        <div className={forumn.columnOne}>
          <header>
            <h1>DISCUSSIONS</h1>
          </header>
          <div className={forumn.SecRowForumn}>
            <button
              className={forumn.NewDiscussionBtn}
              onClick={handleNewDiscussionClick}
            >
              NEW DISCUSSION
            </button>
            <div className={forumn.NumberSlider}> 1 2 3 4 ... 9 </div>
          </div>
          <div className={forumn.thirdRowForumn}>
            <table>
              <colgroup>
                <col className={forumn.TableDiscussion} />
                <col className={forumn.TableReplies} />
                <col className={forumn.TableViews} />
                <col className={forumn.TableRecent} />
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
                {currentPosts.map((topic) => (
                  <tr key={topic._id}>
                    <td onClick={() => handleOpenDiscussion(topic._id)}>
                      <h4>{topic.title}</h4>
                      <p>
                        Started by{" "}
                        <span>{topic.isAnonymous ? "Anonymous" : topic.author}</span>{" "}
                        on <span>{new Date(topic.datePosted).toLocaleString()}</span>
                      </p>
                    </td>
                    <td>{topic.repliesCount}</td>
                    <td>{topic.views}</td>
                    <td>
                      {topic.replies.length > 0
                        ? new Date(topic.replies[topic.replies.length - 1].datePosted).toLocaleString()
                        : new Date(topic.datePosted).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className={`forumn.columnTwo ml-5 w-100`}>
          <form className={`d-flex ${forumn.searchBarForm}`} role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success"
              style={{ borderRadius: "none" }}
              type="submit"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the second item's accordion body. Let's imagine this being
                  filled with some actual content.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Accordion Item #3
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isNewDiscussionOpen && (
        <>
          <div
            className={`${forumn.overlay} ${
              isNewDiscussionOpen ? forumn.showOverlay : ""
            }`}
          ></div>
          <div
            className={`${forumn.discussionModal} ${
              isNewDiscussionOpen ? forumn.open : ""}
            }`}
          >
            <NewDiscussion handleClose={handleCloseDiscussion} />
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

export default Forumn;
