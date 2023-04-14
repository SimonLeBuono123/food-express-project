import OrdersButton from "../orders/OrdersButton.jsx";
import MenuButton from "../menu/MenuButton.jsx";
import LogInButton from "../employee-account/LogInButton.jsx";
import LogOutButton from "../employee-account/LogOutButton.jsx";
import { useContext } from "react";
import globalContext from "../globalContext.jsx";

export default function () {
  const { authentication } = useContext(globalContext);
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      {authentication?.loggedIn ? <OrdersButton /> : null}
      {authentication?.loggedIn ? <MenuButton /> : null}
      {authentication?.loggedIn ? <LogOutButton /> : <LogInButton />}
    </main>
  );
}
