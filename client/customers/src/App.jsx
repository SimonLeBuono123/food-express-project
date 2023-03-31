import { useState } from 'react'

import './index.css'
import {Outlet} from "react-router-dom";
import {GlobalProvider} from "./globalContext.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <GlobalProvider>
    <h1 className="text-3xl font-bold underline
    flex justify-center items-center
    h-screen">
    Hello world!
  </h1>
        </GlobalProvider>
  </>
  )
}

export default App
