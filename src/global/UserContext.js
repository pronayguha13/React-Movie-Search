import React, { createContext, useState } from "react";
import firebase from 

export const UserContext = createContext();

export const User = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const logIn = () => {};

  const logOut = () => {};

  const fetchUser = () => {};

  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
