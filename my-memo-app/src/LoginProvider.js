import { useState, createContext } from "react";

export const LoginContext = createContext({});

export const LoginProvider = (props) => {
  const { children } = props;

  const [isLogged, setIsLogged] = useState(false);

  return (
    <LoginContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </LoginContext.Provider>
  );
};
