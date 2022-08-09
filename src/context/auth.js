import React from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  return (
    <AuthContext.Provider value={{}}>{props.children}</AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
