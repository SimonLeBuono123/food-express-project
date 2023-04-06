import React, { useContext } from "react";
import { useState } from "react";
import globalContext from "../globalContext.jsx";
import { Link } from "react-router-dom";

export default function () {
  const { registerAccount } = useContext(globalContext)


  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    registerAccount(inputs.fullName, inputs.email, inputs.password)
    setInputs({})
  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">

        <h2 className="header">
          Register a new account
        </h2>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">

            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              name="fullName"
              value={inputs.fullName || ""}
              type="text"
              onChange={handleChange}
              autoComplete="name"
              required
              className="roundedFieldTop"
              placeholder="Name"
            />

            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={inputs.email || ""}
              onChange={handleChange}
              autoComplete="email"
              required
              className="roundedFieldMiddle"
              placeholder="Email address"
            />
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              type="password"
              name={"password"}
              value={inputs.password || ""}
              onChange={handleChange}
              autoComplete="current-password"
              required
              className="roundedFieldBottom"
              placeholder="Password"
            />
          </div>
          <div className="flex gap-5">
            <button type="submit" className="button">Submit</button>
            <Link to="/"><button type="submit" className="button">Back</button></Link>
          </div>
        </form>
      </div>
    </div>
  );

}

