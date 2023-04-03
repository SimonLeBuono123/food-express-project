import React, {useContext} from "react";
import {useStates} from "react-easier"
import {useState} from "react";
import globalContext from "../globalContext.jsx";

export default function () {
  const {registerAccount, result} = useContext(globalContext)


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
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Register a new account
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
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
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                      placeholder="Name"
                  />
                </div>
                <div>
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
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                      placeholder="Email address"
                  />
                </div>
                <div>
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
              </div>

              <div>

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

                >Submit</button>
              </div>
            </form>
            <p></p>
          </div>
        </div>
        );

        }

