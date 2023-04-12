import "./index.css";
import { Outlet } from "react-router-dom";
import { GlobalProvider } from "./globalContext.jsx";
import LogOutButton from "./components/loginpage/LogOutButton";

function App() {
  return (
      <GlobalProvider>
        <LogOutButton/>
        <Outlet />
      </GlobalProvider>
  );
}

export default App;
