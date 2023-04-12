import { Link } from "react-router-dom";


export default function () {
  
  return (
    <Link to={"/login"}>
      <button className="button" type="button">
        Login
      </button>
    </Link>
  );
}