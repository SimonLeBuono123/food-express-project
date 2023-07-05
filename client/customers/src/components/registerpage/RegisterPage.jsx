import React, { useContext } from "react";
import { useState } from "react";
import globalContext from "../../globalContext.jsx";
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
    <main className="registerMain">
      <h2 className="largeText">
        Register a new account
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="inputWrapper">
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
        <div className="formButtons">
          <button type="submit" className="button">Submit</button>
          <Link to="/"><button type="submit" className="button">Back</button></Link>
        </div>
      </form>
    </main>
  );

}

