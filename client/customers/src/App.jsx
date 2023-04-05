import { useState } from "react";

import "./index.css";
import { Outlet } from "react-router-dom";
import { GlobalProvider } from "./globalContext.jsx";

function App() {
  return (
    <>
        <p>Hej</p>
      <GlobalProvider>
        <Outlet />
      </GlobalProvider>
    </>
  );
}

export default App;
