import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import HomePage from './pages/HomePage'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import RegisterForm from './components/RegisterForm'


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={'/'} element={ <App />}>
<Route index element={<HomePage />}/>
<Route path={'/register'} element={<RegisterForm />}/>
</Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
