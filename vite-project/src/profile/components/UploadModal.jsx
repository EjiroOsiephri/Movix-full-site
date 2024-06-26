import React, { useState } from "react";
import axios from "axios";
import Classes from "./UploadModal.module.scss";

const UploadModal = ({ show, onClose, onUpload, setProfileData }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const { filePath } = response.data;
      onUpload(`http://localhost:8000/${filePath}`);
      setProfileData(preview);
      onClose();
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div className={Classes.modal}>
      <div className={Classes.modalContent}>
        <h2>Upload Profile Picture</h2>
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFileChange} />
          <button type="submit" className={Classes["profile-btn-upload"]}>
            Upload
          </button>
        </form>
        <button className={Classes["profile-btn"]} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default UploadModal;
