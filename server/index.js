import express from "express";
import mongoose from "mongoose";
import { password } from "./password.js";

import session from 'express-session'
const api = express();
api.use(session({
  secret: 'keyboard cat isahfsoidjinoj',
  resave: false,
  saveUninitialized: true, // false = create session (cookie) when needed true = create session (cookie) immediately
  cookie: {
    secure: false, // true in production
    httpOnly: true, //  cookies are not available in Javascript
    maxAge: 365 * 24 * 60 * 60 * 1000 // the duration of the session which is calculated in milliseconds
  }
}))


const port = 3030;
const uri = `mongodb+srv://food-project:${password}@food-cluster0.a9dyz1j.mongodb.net/?retryWrites=true&w=majority`;

api.use(function(req, res, next){
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  })
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})

api.use(express.json());

api.listen(port, () => {
  mongoose.connect(uri, { dbName: "LionDB" }).then((result, error) => {
    if (result) {
      console.log(`listening in on http://localhost:${port}`);
    } else if (error) {
      console.error(error);
    }
  });
});

import testRouter from "./routes/test-routes.js";
api.use("/rest/test", testRouter);

import customersRouter from "./routes/customers-routes.js";
api.use("/rest/customers", customersRouter);

import loginRouter from "./routes/customers-login.js";
api.use("/rest/customers", loginRouter)