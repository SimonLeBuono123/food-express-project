import React, { useContext } from "react";
import { useStates } from "react-easier"
import { useState } from "react";
import globalContext from "../globalContext.jsx";

export default function () {
    const { submitLogin, submitLogout, result, auth } = useContext(globalContext)


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

            { !auth?.loggedIn ?

            <>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
            />
        </div>
        <div className="flex justify-center items-center">
        <button
            type="submit"
            className="group relative
              w-[8rem]
               flex justify-center
              py-2 px-4 border border-transparent
              text-sm font-medium rounded-md
              text-white
              bg-blue-500 hover:bg-blue-600
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
              "

        >Login</button>
        </div>
    </form></> :
             <button className="group relative
              w-[8rem]
               flex justify-center
              py-2 px-4 border border-transparent
              text-sm font-medium rounded-md
              text-white
              bg-blue-500 hover:bg-blue-600
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
              " onClick={submitLogout}>Logout</button>
        }


        </div>

    );

}

