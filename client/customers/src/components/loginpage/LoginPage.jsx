import React, { useContext } from "react";
import { useState } from "react";
import globalContext from "../../globalContext.jsx";
import { Link } from "react-router-dom";


export default function () {
    const { submitLogin, auth } = useContext(globalContext)
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        submitLogin(inputs.email, inputs.password)
        setInputs({})
    }

    return (
        <div className="w-full flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            {!auth?.loggedIn ?
                <>
                    <h2 className="header">
                        Login
                    </h2>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <label htmlFor="name" className="sr-only">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                value={inputs.email || ""}
                                type="text"
                                onChange={handleChange}
                                autoComplete="email"
                                required
                                className="roundedFieldTop"
                                placeholder="Email"
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
                        <div className="flex justify-center items-center">
                            <button type="submit" className="button"
                            >Login</button>
                        </div>
                    </form></> :
                <Link to={"/menu"}><button className="button">Lets place an order</button></Link>
            }
        </div>
    );
}

