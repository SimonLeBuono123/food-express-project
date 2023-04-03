import express from "express";
import mongoose from "mongoose";
import { password } from "./password.js";

const api = express();
const port = 3030;
const uri = `mongodb+srv://food-project:${password}@food-cluster0.a9dyz1j.mongodb.net/?retryWrites=true&w=majority`;

import session from 'express-session'

// när session körs så kommer den att returnera en funktion som har request response och next
api.use(session({
  secret: 'keyboard cat sdovsdjn', //hash för att hemlighålla databasen även om någon stjäl den long random string
  resave: false, //only saved if modified
  saveUninitialized: true, //session och cookie (create session cookie) skapas altid även om användaren inte gjort något
  cookie: { secure: false, maxAge: 365 * 24 * 60 * 60 * 1000, httpOnly: true } //https, ska vara på i produktion men ej under utveckling, använd envirement variabel i riktig produktion
  //httpOnly: true, cookien är inte tillgänglig i Javascript scopet, ingen kan stjäla sessionen om man har kommit över webbläsaren
}))

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

import employeesRouter from "./routes/employees-routes.js";
api.use("/rest/employees", employeesRouter);

import restaurantLoginRouter from "./routes/restaurant-login-routes.js";
api.use("/rest/restaurant-login", restaurantLoginRouter);