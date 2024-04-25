import { useState, createContext, useContext } from "react";

const LoginContext = createContext({});

export const LoginProvider = (props) => {
  const { children } = props;

  const [isLogin, setIsLogin] = useState(false);

  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
