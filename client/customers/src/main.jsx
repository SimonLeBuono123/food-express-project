import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import RegisterPage from './components/registerpage/RegisterPage';
import LoginPage from './components/loginpage/LoginPage.jsx'
import MenuPage from "./components/menupage/MenuPage.jsx";
import OrderPage from "./components//orderpage/OrderPage.jsx";
import HomePage from './components/homepage/HomePage'


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={'/'} element={<App/>}>
            <Route index element={<HomePage/>}/>
            <Route path={'/menu'} element={<MenuPage/>}></Route>
            <Route path={'/order'} element={<OrderPage/>}></Route>
            <Route path={'/register'} element={<RegisterPage/>}/>
            <Route path={'/login'} element={<LoginPage/>}/>
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
