import React, { useState, useRef } from "react";
import newD from "./NewDiscussion.module.css";
import "./switch.css";
import "./normalND.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function NewDiscussion({ handleClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const quillRef = useRef(null);

  const handleToggleAnonymous = () => {
    setIsAnonymous(!isAnonymous);
  };

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      return data.url; // Return the URL from the response
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  };

  const modules = {
    toolbar: {
      container: [
        ["bold", "italic", "underline"],
        [{ list: "bullet" }, { list: "ordered" }],
        ["link", "image"],
      ],
      handlers: {
        image: () => {
          const input = document.createElement("input");
          input.setAttribute("type", "file");
          input.setAttribute("accept", "image/*");
          input.click();
          input.onchange = async () => {
            const file = input.files[0];
            const imageUrl = await handleImageUpload(file);
            if (imageUrl) {
              const range = quillRef.current.getEditor().getSelection();
              quillRef.current.getEditor().insertEmbed(range.index, "image", imageUrl);
            }
          };
        },
      },
    },
  };

  const formats = ["bold", "italic", "underline", "list", "bullet", "link", "image"];

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = {
      title: title.trim(),
      category: document.getElementById("category-select").value,
      tags: document.getElementById("tags-select").value,
      description: content,
      isAnonymous: isAnonymous,
    };

    try {
      const response = await fetch("/api/topics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result); // Handle success
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    setIsSubmitting(false);
    handleClose();
  };

  return (
    <>
      <div className={newD.openComposer}>
        <div className={newD.manupulateButton}>
          <div className={newD.switchContainer}>
            <p>Anonymous</p>
            <input
              id="cmn-toggle-4"
              className="cmn-toggle cmn-toggle-round-flat"
              type="checkbox"
              checked={isAnonymous}
              onChange={handleToggleAnonymous}
            />
            <label htmlFor="cmn-toggle-4"></label>
          </div>
          <div className={newD.rightIcons}>
            <div className={newD.close} onClick={handleClose}>
              <i className="fa-solid fa-x"></i>
            </div>
          </div>
        </div>
        <div className={newD.editorCont}>
          <div className={newD.textAreaColumn}>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="What is this discussion about in one brief sentence?"
              />
              <div className={newD.selectContainer}>
                <select name="category" id="category-select">
                  <option value="">--Select a category--</option>
                  <option value="Ideas">Ideas</option>
                  <option value="Academics and Career">Academics and Career</option>
                  <option value="Cultural Exchange">Cultural Exchange</option>
                  <option value="Student Support">Student Support</option>
                  <option value="Events and Activities">Events and Activities</option>
                  <option value="Advocacy and Awareness">Advocacy and Awareness</option>
                  <option value="Networking and Collaboration">Networking and Collaboration</option>
                  <option value="Travel and Exploration">Travel and Exploration</option>
                </select>
                <select name="tags" id="tags-select">
                  <option value="">--Optional Tags--</option>
                  <option value="Help">Help</option>
                  <option value="Information">Information</option>
                  <option value="Sports">Sports</option>
                  <option value="Volunteering">Volunteering</option>
                  <option value="Internships">Internships</option>
                </select>
              </div>
              <div className={newD.richTextEditorRow}>
                <ReactQuill
                  ref={quillRef}
                  theme="snow"
                  value={content}
                  onChange={setContent}
                  modules={modules}
                  formats={formats}
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
              <div className={newD.submitButton}>
                <button className={newD.submitButtonDiscussion} disabled={isSubmitting}>
                  <i className="fa-solid fa-plus newDiscussion"></i> Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewDiscussion;
