import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [notifications, setNotifications] = useState([]);

  const login = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const addNotification = (notification) => {
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      notification,
    ]);
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        notifications,
        addNotification,
        clearNotifications,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
