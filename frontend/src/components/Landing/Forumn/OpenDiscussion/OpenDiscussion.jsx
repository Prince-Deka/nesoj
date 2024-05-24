import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './../../NavBar/Navbar';
import Footer from './../../Footer/Footer';
import openD from './OpenDiscussion.module.css'; // Ensure you have this CSS module file
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Include the Quill stylesheet
import { useAuth } from '../../../../store/auth';

function OpenDiscussion() {
    const { id } = useParams();
    const { particularForumData, fetchParticularDiscussion, token } = useAuth();
    const [editorVisible, setEditorVisible] = useState(false);
    const [editorContent, setEditorContent] = useState('');

    useEffect(() => {
        if (id) {
            fetchParticularDiscussion(id);
        }
    }, [id]);

    const toggleEditor = () => {
        setEditorVisible(!editorVisible);
    };

    const handleEditorChange = (content) => {
        setEditorContent(content);
    };

    const submitReply = () => {
        console.log('Submitting reply:', editorContent);
        // Handle the submission logic
        setEditorVisible(false);
        setEditorContent('');
    };

    const handleUpvote = async () => {
        try {
            await axios.post(`http://localhost:3000/api/forum/topics/${id}/upvote`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            fetchParticularDiscussion(id); // Refresh the topic data
        } catch (error) {
            console.error("Error upvoting topic:", error);
        }
    };

    const modules = {
        toolbar: {
            container: [
                ["bold", "italic", "underline"],
                [{ list: "bullet" }, { list: "ordered" }],
                ["link"],
            ]
        },
    };

    const formats = [
        "bold",
        "italic",
        "underline",
        "list",
        "bullet",
        "link",
    ];

    return (
        <>
            <Navbar/>
            <div className={openD.viewDiscussionTab}>
                <div className={openD.viewDiscussionTabHeader}>
                    <h1>{particularForumData.title}</h1>
                    <p>Started by <span>{particularForumData.isAnonymous ? "Anonymous" : particularForumData.author}</span> on <span>{new Date(particularForumData.datePosted).toLocaleString()}</span></p>
                </div>
                <div className={openD.viewDiscussionTabContent}>
                    <p>{particularForumData.description}</p>
                </div>
                <div className={openD.viewDiscussionTabFooter}>
                    <div className={openD.repliesHeader}>
                        <p>Replies</p>
                        <div className={openD.replyActions}>
                            <button onClick={handleUpvote} className={openD.upvoteButton}><i className="fa-solid fa-caret-up"></i> Upvote ({particularForumData.upvotesCount})</button>
                            <button onClick={toggleEditor} className={openD.replyButton}><i className="fa-solid fa-reply"></i> Reply</button>
                        </div>
                    </div>
                    <div className={openD.replies}>
                        {particularForumData.replies && particularForumData.replies.map(reply => (
                            <div key={reply._id} className={openD.reply}>
                                <p><strong>{reply.author}</strong> ({new Date(reply.datePosted).toLocaleString()})</p>
                                <p>{reply.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
            <div className={openD.richTextEditor} style={{ transform: `translateY(${editorVisible ? '0%' : '100%'})` }}>
                <ReactQuill theme="snow" modules={modules} formats={formats} value={editorContent} onChange={handleEditorChange}/>
                <div className={openD.richTextButton}>
                    <button onClick={submitReply}>Reply</button>
                    <button onClick={() => setEditorVisible(false)}>Close</button>
                </div>
            </div>
        </>
    );
}

export default OpenDiscussion;
