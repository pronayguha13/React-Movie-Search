import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const User = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const logIn = () => {};

  const logOut = () => {};

  const fetchUser = () => {};

  return (
    <UserContext.Provider
      value={{ isLoggedIn, user, logIn, logOut, fetchUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
