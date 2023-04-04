import LogInButton from "../components/LogInButton.jsx";
import LogOutButton from "../components/LogOutButton.jsx";
import { useContext } from "react";
import globalContext from "../globalContext.jsx";

export default function () {
  const { authentication } = useContext(globalContext);
  return (
    <main className="h-screen flex justify-center items-center">
      {authentication?.loggedIn ? <LogOutButton /> : <LogInButton />}
    </main>
  );
}
