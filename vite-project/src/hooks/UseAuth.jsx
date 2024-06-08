import { useState } from "react";

export const useAuth = () => {
  const [token, setToken] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return {
    token,
    setToken,
    isLoggedIn,
    setIsLoggedIn,
  };
};
