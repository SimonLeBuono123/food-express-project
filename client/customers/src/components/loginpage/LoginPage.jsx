import React, { useContext, useEffect } from "react";
import { useState } from "react";
import globalContext from "../../globalContext.jsx";
import { useNavigate } from "react-router-dom";


export default function () {
    const { submitLogin, auth } = useContext(globalContext)
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

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

useEffect(()=>{
    if (auth.loggedIn) return navigate("/menu")
    else return
},[auth])


    return (
        
        <main className="loginMain">
            <h2 className="largeText">
                Login
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="inputWrapper">
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
                <div className="formButtons">
                    <button type="submit" className="button"
                    >Login</button>
                    <button type="button" className="button" onClick={()=>{navigate(-1)}}
                    >Back</button>
                </div>
            </form>
                
        </main>
    );
}

