import React, { useState } from 'react';
import Navbar from './../../NavBar/Navbar';
import Footer from './../../Footer/Footer';
import openD from './OpenDiscussion.module.css'; // Ensure you have this CSS module file
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Include the Quill stylesheet


function OpenDiscussion() {
    const [editorVisible, setEditorVisible] = useState(false);
    const replies = [
        { id: 1, author: "Alice", date: "2024-05-01", content: "Really interesting topic, thanks for sharing!" },
        { id: 2, author: "Bob", date: "2024-05-02", content: "I have a few questions about this topic." },
        { id: 3, author: "Charlie", date: "2024-05-03", content: "Here's a link to a related article." }
    ];
    const toggleEditor = () => {
        setEditorVisible(!editorVisible);
    };
    const [editorContent, setEditorContent] = useState('');

    const handleEditorChange = (content) => {
        setEditorContent(content);
    };

    const submitReply = () => {
        console.log('Submitting reply:', editorContent);
        // Here you might handle the submission logic, e.g., sending to a server
        setEditorVisible(false); // Optionally close the editor after submission
        setEditorContent(''); // Clear the editor
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
                <h1>Discussion Title</h1>
                <p>Started by <span>AuthorName</span> on <span>date</span></p>
            </div>
            <div className={openD.viewDiscussionTabContent}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className={openD.viewDiscussionTabFooter}>
                <div className={openD.repliesHeader}>
                    <p>Replies</p>
                    <div className={openD.replyActions}>
                        <span><i className="fa-solid fa-caret-up"></i> Upvote</span>
                        <span onClick={() => setEditorVisible(!editorVisible)}><i className="fa-solid fa-reply"></i> Reply</span>
                    </div>
                </div>
                <div className={openD.replies}>
                    {replies.map(reply => (
                        <div key={reply.id} className={openD.reply}>
                            <p><strong>{reply.author}</strong> ({reply.date})</p>
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
