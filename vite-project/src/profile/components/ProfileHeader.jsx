import React, { useState } from "react";
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

const ProfileHeader = () => {
  const navigate = useNavigate();
  const [isShownSlide, setIsShownSlide] = useState(false);

  const navigateToHome = () => {
    navigate("/");
  };

  const showSlideIn = () => {
    setIsShownSlide(true);
  };

  const cancelSlideIn = () => {
    setIsShownSlide(false);
  };

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
              style={
                isShownSlide
                  ? {
                      display: "none",
                    }
                  : {}
              }
            />
            <FaTimes
              className={Classes["fa-times"]}
              style={
                isShownSlide
                  ? {
                      display: "block",
                    }
                  : {}
              }
              onClick={cancelSlideIn}
            />
          </div>
        </div>
        <div
          className={Classes["interactive-section"]}
          style={
            isShownSlide
              ? {
                  position: "absolute",
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
              <li>Movies</li>
              <li>Tv Shows</li>
              <li>Series</li>
              <li>Animation</li>
            </ul>
          </div>
          <div className={Classes["search-input"]}>
            <FaSearch className={Classes["search-icon"]} />
            <input type="text" placeholder="Search" />
          </div>
          <div className={Classes["notification-section"]}>
            <FaBell className={Classes["fa-bell"]} />
            <div className={Classes["profile-section"]}>
              <FaUser className={Classes["fa-user"]} />
              <p>
                <FaCaretDown className={Classes["dropdown-icon"]} />
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProfileHeader;
