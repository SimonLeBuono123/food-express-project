import { Link } from "react-router-dom";
import globalContext from "../globalContext.jsx";
import { useContext } from "react";

export default function () {
  const { submitLogout } = useContext(globalContext);

  const handleClick = (event) => {
    event.preventDefault();
    submitLogout();
  };

  return (
    <button
      onClick={handleClick}
      className="
bg-blue-500 hover:bg-blue-700
text-white font-bold py-2 px-4 rounded m-2"
      type="button"
    >
      Log out
    </button>
  );
}
