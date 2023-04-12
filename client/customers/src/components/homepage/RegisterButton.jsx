import { Link } from "react-router-dom";


export default function () {
  
  return (
    <Link to={"/register"}>
      <button className="button" type="button">
        Sign Up
      </button>
    </Link>
  );
}
