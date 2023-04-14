import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./employee-account/LoginPage.jsx";
import HomePage from "./home-page/HomePage.jsx";
import MenuPage from "./menu/MenuPage.jsx";
import OrdersPage from "./orders/OrdersPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={"/"} element={<App />}>
      <Route index element={<HomePage />} />
      <Route path={"/login"} element={<LoginPage />} />
      <Route path={"/menu"} element={<MenuPage />} />
      <Route path={"/orders"} element={<OrdersPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
