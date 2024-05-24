import React, { useState, useRef, useCallback, useMemo } from "react";
import newD from "./NewDiscussion.module.css";
import "./switch.css";
import "./normalND.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FaFileImage } from "react-icons/fa";
import { useAuth } from '../../../../store/auth';

const NewDiscussion = ({ handleClose }) => {
  const user = useAuth().user;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [image, setImage] = useState(null);
  const quillRef = useRef(null);

  const handleToggleAnonymous = useCallback(() => {
    setIsAnonymous((prev) => !prev);
    console.log("Anonymous:", !isAnonymous);
  }, [isAnonymous]);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      console.log("Selected image:", file);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setImage(file);
      console.log("Dropped image:", file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleChangeImage = () => {
    setImage(null);
    console.log("Image removed");
  };

  const modules = useMemo(() => ({
    toolbar: {
      container: [
        ["bold", "italic", "underline"],
        [{ list: "bullet" }, { list: "ordered" }],
        ["link"],
      ],
    },
  }), []);

  const formats = ["bold", "italic", "underline", "list", "bullet", "link"];

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("title", title.trim());
    formData.append("category", document.getElementById("category-select").value);
    formData.append("tag", document.getElementById("tags-select").value);
    formData.append("description", content);
    formData.append("isAnonymous", isAnonymous);
    formData.append("author", user.username);


    if (image) {
      formData.append("image", image);
    }

    console.log("Form Data:", {
      title: title.trim(),
      category: document.getElementById("category-select").value,
      tags: document.getElementById("tags-select").value,
      description: content,
      isAnonymous: isAnonymous,
      image: image,
    });

    try {
      const response = await fetch("http://localhost:3000/api/forumn/topics", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      console.log("Response:", result);
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    setIsSubmitting(false);
    handleClose();
  };

  return (
    <div className={newD.openComposer}>
      <form onSubmit={handleSubmit}>
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
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                console.log("Title:", e.target.value);
              }}
              placeholder="What is this discussion about in one brief sentence?"
            />
            <div className={newD.selectContainer}>
              <select
                name="category"
                id="category-select"
                onChange={(e) => console.log("Category:", e.target.value)}
              >
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
              <select
                name="tags"
                id="tags-select"
                onChange={(e) => console.log("Tags:", e.target.value)}
              >
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
                onChange={(value) => {
                  setContent(value);
                  console.log("Content:", value);
                }}
                modules={modules}
                formats={formats}
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>
          <div className={newD.uploadOption}>
            {image ? (
              <div className={newD.uploadContainer}>
                <div className={newD.imagePreview}>
                  <img src={URL.createObjectURL(image)} alt="Preview" />
                </div>
              </div>
            ) : (
              <div
                className={newD.uploadContainer}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                <div className={newD.borderContainer}>
                  <div className={newD.icons}>
                    <FaFileImage className={newD.imageFileIcon} size={80} />
                  </div>
                  <input
                    type="file"
                    id="file-upload"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleFileSelect}
                  />
                  <label htmlFor="file-upload">
                    <p>
                      Drag and drop files here, or{" "}
                      <span className={newD.browseLink}>browse</span> your computer.
                    </p>
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={newD.submitButtonContainer}>
          <button
            className={`${newD.submitButtonDiscussion} ${image ? newD.withImage : ""}`}
            disabled={isSubmitting}
          >
            <i className="fa-solid fa-plus newDiscussion"></i> Submit
          </button>
          {image && (
            <button
              type="button"
              className={newD.changeImageButton}
              onClick={handleChangeImage}
            >
              Change Image
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default NewDiscussion;
