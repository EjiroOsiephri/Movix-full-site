import React from "react";
import Classes from "./NotificationModal.module.scss";

const NotificationModal = ({ onClose }) => {
  const getItem = JSON.parse(localStorage.getItem("notificationData")) || [];

  return (
    <div className={Classes["notification-modal-overlay"]} onClick={onClose}>
      <div
        className={Classes["notification-modal"]}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Notifications</h2>
        <ul>
          {getItem.length > 0 ? (
            getItem.map((notification, index) => (
              <li key={index}>
                {notification.filmName} - {notification.message}
              </li>
            ))
          ) : (
            <p>No notifications</p>
          )}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default NotificationModal;
