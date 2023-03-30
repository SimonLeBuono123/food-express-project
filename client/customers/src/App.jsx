import { useState } from 'react'

import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <h1 className="text-3xl font-bold underline
    flex justify-center items-center
    h-screen">
    Hello world!
  </h1>
  )
}

export default App
