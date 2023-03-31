import { useState } from 'react'
import './index.css'
import {GlobalProvider} from "./globalContext.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <GlobalProvider>
    <h1 className="bg-red-400
    text-3xl font-bold underline">
    Hello world!
  </h1>
      </GlobalProvider>
  )
}

export default App
