import React from "react";
import { FaBell, FaCaretDown, FaSearch, FaUser } from "react-icons/fa";
import Classes from "./ProfileHeader.module.scss";
import { useNavigate } from "react-router-dom";

const ProfileHeader = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <>
      <main className={Classes["main-profile"]}>
        <h1 onClick={navigateToHome}>
          MOVI<span>X.</span>
        </h1>
        <div className={Classes["list-item"]}>
          <ul>
            <li>Movies</li>
            <li>Tv shows</li>
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
              <FaCaretDown />
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProfileHeader;
