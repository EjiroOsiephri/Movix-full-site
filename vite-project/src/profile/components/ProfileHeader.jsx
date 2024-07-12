import React, { useState, useEffect, useContext } from "react";
import {
  FaBell,
  FaCaretDown,
  FaSearch,
  FaUser,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import Classes from "./ProfileHeader.module.scss";
import { useNavigate } from "react-router-dom";
import NotificationModal from "./NotificationModal";
import UploadModal from "./UploadModal";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const ProfileHeader = ({ onCategoryChange, onSearchChange }) => {
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  const [isShownSlide, setIsShownSlide] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const storedNotifications =
      JSON.parse(localStorage.getItem("notificationData")) || [];
    setNotifications(storedNotifications);
    setNotificationCount(storedNotifications.length);

    const handleStorageChange = () => {
      const updatedNotifications =
        JSON.parse(localStorage.getItem("notificationData")) || [];
      setNotifications(updatedNotifications);
      setNotificationCount(updatedNotifications.length);
    };

    window.addEventListener("storage", handleStorageChange);

    const handleNotificationChange = (event) => {
      setNotifications(event.detail.notifications);
      setNotificationCount(event.detail.notifications.length);
    };

    window.addEventListener("notificationChange", handleNotificationChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener(
        "notificationChange",
        handleNotificationChange
      );
    };
  }, []);

  const navigateToHome = () => {
    navigate("/");
  };

  const showSlideIn = () => {
    setIsShownSlide(true);
  };

  const cancelSlideIn = () => {
    setIsShownSlide(false);
  };

  const handleBellClick = () => {
    setShowNotifications(true);
  };

  const closeNotificationsModal = () => {
    setShowNotifications(false);
  };

  const deleteNotification = (filmName) => {
    const updatedNotifications = notifications.filter(
      (notification) => notification.filmName !== filmName
    );
    setNotifications(updatedNotifications);
    setNotificationCount(updatedNotifications.length);
    localStorage.setItem(
      "notificationData",
      JSON.stringify(updatedNotifications)
    );
    localStorage.setItem("number", JSON.stringify(updatedNotifications.length));
    const event = new CustomEvent("notificationChange", {
      detail: { notifications: updatedNotifications },
    });
    window.dispatchEvent(event);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearchChange(term);
  };

  const handleProfileClick = () => {
    setShowUploadModal(true);
  };

  const handleUpload = (imageURL) => {
    setProfileData((prevData) => ({ ...prevData, profileImage: imageURL }));
  };

  const handleCloseUploadModal = () => {
    setShowUploadModal(false);
  };

  const closeSlide = () => {
    setIsShownSlide(false);
  };

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
        setProfileData(response.data.profile);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchProfile();
  }, [token]);

  return (
    <>
      <main className={Classes["main-profile"]}>
        <div className={Classes["h1"]}>
          <h1 onClick={navigateToHome}>
            MOVI<span>X.</span>
          </h1>
          <div className={Classes["mobile-slideshow"]}>
            <FaBars
              className={Classes["fa-bars"]}
              onClick={showSlideIn}
              style={isShownSlide ? { display: "none" } : {}}
            />
            <FaTimes
              className={Classes["fa-times"]}
              style={isShownSlide ? { display: "block" } : {}}
              onClick={cancelSlideIn}
            />
          </div>
        </div>
        <div
          className={Classes["interactive-section"]}
          style={
            isShownSlide
              ? {
                  position: "fixed",
                  left: 0,
                  transition: "0.8s ease",
                }
              : {
                  left: "-150%",
                  transition: "0.8s ease",
                }
          }
        >
          <div className={Classes["list-item"]}>
            <ul>
              <li
                className={selectedCategory === "movie" ? Classes.active : ""}
                onClick={() => handleCategoryChange("movie")}
              >
                Movies
              </li>
              <li
                className={selectedCategory === "tv" ? Classes.active : ""}
                onClick={() => handleCategoryChange("tv")}
              >
                TV Shows
              </li>
              <li
                className={selectedCategory === "series" ? Classes.active : ""}
                onClick={() => handleCategoryChange("series")}
              >
                Series
              </li>
              <li
                className={
                  selectedCategory === "animation" ? Classes.active : ""
                }
                onClick={() => handleCategoryChange("animation")}
              >
                Animation
              </li>
            </ul>
          </div>
          <div className={Classes["search-input"]}>
            <FaSearch className={Classes["search-icon"]} />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className={Classes["notification-section"]}>
            <section onClick={handleBellClick}>
              <FaBell className={Classes["fa-bell"]} />
              <p>{notificationCount}</p>
            </section>
            <div
              className={Classes["profile-section"]}
              onClick={handleProfileClick}
            >
              {profileData?.profileImage ? (
                <img
                  src={profileData?.profileImage}
                  alt="Profile"
                  className={Classes["profileImage"]}
                />
              ) : (
                <FaUser className={Classes["fa-user"]} />
              )}
              <p>
                <FaCaretDown
                  onClick={closeSlide}
                  className={Classes["dropdown-icon"]}
                />
              </p>
            </div>
          </div>
        </div>
      </main>
      {showNotifications && (
        <NotificationModal
          notifications={notifications}
          onClose={closeNotificationsModal}
          deleteNotification={deleteNotification}
        />
      )}
      {showUploadModal && (
        <UploadModal
          show={showUploadModal}
          onClose={handleCloseUploadModal}
          onUpload={handleUpload}
          setProfileData={setProfileData}
        />
      )}
    </>
  );
};

export default ProfileHeader;
