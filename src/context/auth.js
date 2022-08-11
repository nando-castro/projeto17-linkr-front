import React, { useEffect } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [userToken, setUserToken] = React.useState(
    JSON.parse(localStorage.getItem("token"))
  );
  useEffect(() => {
    if (userToken) {
      const data = JSON.stringify(userToken)
      localStorage.setItem("token", data);
    } else {
      const data = JSON.stringify(null)
      localStorage.setItem("token", data);
    }
  }, [userToken]);

  return (
    <AuthContext.Provider value={{ userToken, setUserToken }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
