import React from "react";
import { FaBell, FaCaretDown, FaSearch } from "react-icons/fa";

const ProfileHeader = () => {
  return (
    <>
      <main>
        <h1>
          MOVI<span>X</span>
        </h1>
        <div className="list-item">
          <ul>
            <li>Movies</li>
            <li>Tv shows</li>
            <li>Series</li>
            <li>Animation</li>
          </ul>
        </div>
        <div className="search-input">
          <FaSearch />
          <input type="text" placeholder="Search" />
        </div>
        <div className="notification-section">
          <FaBell />
          <div className="profile-section">
            <img src="" alt="Ejiro" />
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
