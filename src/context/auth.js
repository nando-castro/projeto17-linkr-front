import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [userToken, setUserToken] = React.useState(
    JSON.parse(localStorage.getItem("token"))
  );
  const [hoverProfile, setHoverProfile] = React.useState(false);
  const [timeline, setTimeline] = useState([]);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@linkr:user"))
  );

  useEffect(() => {
    if (userToken) {
      const data = JSON.stringify(userToken);
      localStorage.setItem("token", data);
    } else {
      localStorage.setItem("token", null);
    }
  }, [userToken]);

  return (
    <AuthContext.Provider
      value={{
        userToken,
        setUserToken,
        hoverProfile,
        setHoverProfile,
        timeline,
        setTimeline,
        setUser,
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
