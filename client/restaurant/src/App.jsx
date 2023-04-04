import { useState } from 'react'
import './index.css'
import {GlobalProvider} from "./globalContext.jsx";
import HomePage from "./pages/HomePage.jsx";
import {Outlet} from "react-easier";

function App() {
  const [count, setCount] = useState(0)

  return (
      <GlobalProvider>
        < Outlet />
      </GlobalProvider>
  )
}

export default App
