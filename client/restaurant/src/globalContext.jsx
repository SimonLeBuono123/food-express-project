import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [tests, setTests] = useState([]);
  const [authentication, setAuthentication] = useState({loggedIn: false})

  useEffect(() => {
    void getTests();
    void checkAuthentication()
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
    const result = await response.json()
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
    if (result.loggedIn === false) {
      alert("Invalid email or password")
    }
    setIsLoading(false);
    //authenticate
    void checkAuthentication()
  };

  const submitLogout = async ()=> {
    setIsLoading(true)
    const response = await fetch('/rest/restaurant/login', {
      method: 'DELETE'
    })
    const result = await response.json()
    console.log(result)
    setIsLoading(false)
    setAuthentication({loggedIn: false})
    void checkAuthentication()
  }

  return (
    <GlobalContext.Provider
      value={{
        tests,
        submitLogin,
        submitLogout,
        authentication
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
