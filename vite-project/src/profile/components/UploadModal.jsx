import React, { useState, useEffect } from "react";
import axios from "axios";
import Classes from "./UploadModal.module.scss";

const UploadModal = ({ show, onClose, setProfileData }) => {
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
          "https://movix-full-site-9.onrender.com/api/users/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setProfile(response.data.profile);
        setUsername(response.data.profile.name);
        setDescription(response.data.profile.bio);
        setPreview(response.data.profile.profileImage);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfile();
  }, [token]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username || !description) return;

    let profileImageUrl = preview;

    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const uploadResponse = await axios.post(
          "https://movix-full-site-9.onrender.com/api/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const { filePath } = uploadResponse.data;
        profileImageUrl = filePath;
      } catch (error) {
        console.error("Error uploading file:", error);
        return;
      }
    }

    try {
      const response = await axios.post(
        "https://movix-full-site-9.onrender.com/api/users/profile",
        { username, description, profileImage: profileImageUrl },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setProfileData({ profileImage: profileImageUrl });
      onClose();
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div className={Classes.modal}>
      <div className={Classes.modalContent}>
        <h3>Upload Personal Information</h3>
        <hr />
        {profile ? (
          <div>
            <p>
              NAME: <span>{profile.name}</span>
            </p>
            <p>
              BIO: <span>{profile.bio}</span>
            </p>
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
