import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import HomePage from "./pages/HomePage.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={'/'} element={ <App />}>
            <Route index element={< HomePage />}/>
            <Route path={'/login'} element={< LoginPage />}/>


        </Route>
    )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
