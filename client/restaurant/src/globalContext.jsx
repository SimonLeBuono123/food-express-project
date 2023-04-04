import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [tests, setTests] = useState([]);
  const [authentication, setAuthentication] = useState({loggedIn: false})

  useEffect(() => {
    void getTests();
  }, []);

  const getTests = async () => {
    setIsLoading(true);
    const response = await fetch("/rest/test");
    const result = await response.json();
    console.log(result);
    setTests(result);
    setIsLoading(false);
  };

  const checkAuthentication = async () => {
    setIsLoading(true)
    const response = await fetch("/rest/restaurant/login")
    console.log("Loading Auth")
    const result = await response.json()
    console.log(`auth state: ${result}`)
    setAuthentication(result)
    setIsLoading(false)
  }

  const submitLogin = async (email, password) => {
    setIsLoading(true);
    const response = await fetch("/rest/restaurant/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const result = await response.json();
    console.log(result);
    setIsLoading(false);
    //authenticate
  };

  return (
    <GlobalContext.Provider
      value={{
        tests,
        submitLogin,
        checkAuthentication
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
