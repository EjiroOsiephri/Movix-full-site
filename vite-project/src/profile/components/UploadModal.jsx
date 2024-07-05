import React, { useState, useEffect } from "react";
import axios from "axios";
import Classes from "./UploadModal.module.scss";

const UploadModal = ({ show, onClose, onUpload, setProfileData }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [profile, setProfile] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/users/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(response.data);

        setProfile(response.data);
        setUsername(response.data.name);
        setDescription(response.data.bio);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfile();
  }, [username, description]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file || !username || !description) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("username", username);
    formData.append("description", description);

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

  console.log(profile.profile);

  return (
    <div className={Classes.modal}>
      <div className={Classes.modalContent}>
        <h2>Upload Profile Picture</h2>
        {profile ? (
          <div>
            <h3>{profile?.profile?.name}</h3>
            <p>{profile?.profile?.bio}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              className={Classes.UploadModalForm}
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              className={Classes.UploadModalForm}
              type="text"
              placeholder="Enter a short bio"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <input
              className={Classes.UploadModalForm}
              type="file"
              onChange={handleFileChange}
              required
            />
            <button type="submit" className={Classes["profile-btn-upload"]}>
              Upload
            </button>
          </form>
        )}
        <button className={Classes["profile-btn"]} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default UploadModal;
