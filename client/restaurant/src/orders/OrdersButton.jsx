import { Link } from "react-router-dom";

export default function () {
  return (
    <Link to={"/orders"}>
      <button
        className="
bg-blue-500 hover:bg-blue-700
text-white font-bold py-2 px-4 rounded m-2"
        type="button"
      >
        Orders
      </button>
    </Link>
  );
}
