import { useContext, useState, useEffect } from "react";
import globalContext from "../globalContext.jsx";
import { useNavigate } from "react-router-dom";

export default function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { submitLogin, authentication } = useContext(globalContext);
  const navigate = useNavigate();

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    submitLogin(email, password);
  };

  useEffect(() => {
    loginHandler();
  }, [authentication]);

  function loginHandler() {
    if (authentication.loggedIn) {
      navigate("/");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mt-10">
      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-gray-700 font-bold mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sign In
        </button>
      </div>
    </form>
  );
}
