import React, { useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [timeline, setTimeline] = useState([]);

  return (
    <AuthContext.Provider value={{timeline, setTimeline}}>{props.children}</AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
