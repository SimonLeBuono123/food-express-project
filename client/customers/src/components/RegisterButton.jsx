import { Link } from "react-router-dom";
export default function () {
  return (
    <Link to={"/register"}>
      <button
        className="
bg-blue-500 hover:bg-blue-700 
text-white font-bold py-2 px-4 rounded"
        type="button"
      >
        Sign Up
      </button>
    </Link>
  );
}
