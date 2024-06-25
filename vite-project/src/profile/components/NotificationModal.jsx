import React from "react";
import Classes from "./NotificationModal.module.scss";
import { FaTrash } from "react-icons/fa";

const NotificationModal = ({ notifications, onClose, deleteNotification }) => {
  return (
    <div className={Classes["notification-modal-overlay"]} onClick={onClose}>
      <div
        className={Classes["notification-modal"]}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Notifications</h2>
        <ul>
          {notifications.length > 0 ? (
            notifications.map((notification, index) => (
              <li key={index}>
                {notification.filmName} - {notification.message}
                <FaTrash
                  className={Classes["delete-icon"]}
                  onClick={() => deleteNotification(notification.filmName)}
                  style={{
                    color: "red",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                />
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
