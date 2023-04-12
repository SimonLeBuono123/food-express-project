import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [tests, setTests] = useState([]);
  const [authentication, setAuthentication] = useState({ loggedIn: false });
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    void getTests();
    void checkAuthentication();
    void getItems();
    const intervalId = setInterval(() => {
      void getOrders();
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const getTests = async () => {
    setIsLoading(true);
    const response = await fetch("/rest/test");
    const result = await response.json();
    setTests(result);
    setIsLoading(false);
  };

  const checkAuthentication = async () => {
    setIsLoading(true);
    const response = await fetch("/rest/restaurant/login");
    const result = await response.json();
    setAuthentication(result);
    setIsLoading(false);
  };

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
      alert("Invalid email or password");
    }
    setIsLoading(false);
    //authenticate
    void checkAuthentication();
  };

  const submitLogout = async () => {
    setIsLoading(true);
    const response = await fetch("/rest/restaurant/login", {
      method: "DELETE",
    });
    const result = await response.json();
    console.log(result);
    setIsLoading(false);
    setAuthentication({ loggedIn: false });
    void checkAuthentication();
  };

  const getItems = async () => {
    setIsLoading(true);
    const response = await fetch("/rest/items");
    const result = await response.json();
    setItems([...result]);
    setIsLoading(false);
  };

  const postItem = async (name, ingredients, category, price) => {
    setIsLoading(true);
    const response = await fetch("/rest/items", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        name: name,
        ingredients: ingredients,
        categories: { _id: category },
        price: price,
      }),
    });
    const result = await response.json();
    console.log(result);
    setIsLoading(false);
    void getItems();
  };

  const deleteItem = async (id) => {
    setIsLoading(true);
    const response = await fetch(`/rest/items/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    console.log(result);
    setIsLoading(false);
    void getItems();
  };

  const getOrders = async () => {
    setIsLoading(true);
    const response = await fetch("/rest/order");
    const result = await response.json();
    setOrders(result);
    setIsLoading(false);
  };

  const patchOrder = async (
    _id,
    pickupDate,
    isDelivered,
    isAccepted,
    totalPrice
  ) => {
    setIsLoading(true);
    const response = await fetch(`/rest/order/${_id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        pickupDate: pickupDate,
        isDelivered: isDelivered,
        isAccepted: isAccepted,
        totalPrice: totalPrice,
      }),
    });
    const result = await response.json();
    console.log(result);
    setIsLoading(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        tests,
        submitLogin,
        submitLogout,
        authentication,
        items,
        getItems,
        postItem,
        deleteItem,
        orders,
        patchOrder,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
