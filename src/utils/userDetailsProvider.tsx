import React, { useContext, createContext, useState } from "react";

const UserContext = createContext();

export const UserDetailsProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");

  const changeName = (name) => {
    setName(name);
  };
  const changeEmail = (email) => {
    setEmail(email);
  };
  const changeMobileNumber = (mobileNumber) => {
    setMobileNumber(mobileNumber);
  };
  const changePassword = (password) => {
    setPassword(password);
  };

  const value = {
    name,
    email,
    mobileNumber,
    password,
    changeName,
    changeEmail,
    changeMobileNumber,
    changePassword,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserDetails = () => useContext(UserContext);
