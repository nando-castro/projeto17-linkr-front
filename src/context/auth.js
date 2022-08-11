import React, { useEffect } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [userToken, setUserToken] = React.useState(
    JSON.parse(localStorage.getItem("token"))
  );
  const [hoverProfile, setHoverProfile] = React.useState(false);
  useEffect(() => {
    if (userToken) {
      const data = JSON.stringify(userToken);
      localStorage.setItem("token", data);
    } else {
      const data = JSON.stringify(null);
      localStorage.setItem("token", data);
    }
  }, [userToken]);

  return (
    <AuthContext.Provider
      value={{ userToken, setUserToken, hoverProfile, setHoverProfile }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
