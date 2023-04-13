import express from "express";
import mongoose, {Schema} from "mongoose";
import { password } from "./password.js";

const port = 3030;
const uri = `mongodb+srv://food-project:${password}@food-cluster0.a9dyz1j.mongodb.net/?retryWrites=true&w=majority`;

import session from "express-session";
const api = express();
api.use(
  session({
    secret: "keyboard cat isahfsoidjinoj",
    resave: false,
    saveUninitialized: true, // false = create session (cookie) when needed true = create session (cookie) immediately
    cookie: {
      secure: false, // true in production
      httpOnly: true, //  cookies are not available in Javascript
      maxAge: 365 * 24 * 60 * 60 * 1000, // the duration of the session which is calculated in milliseconds
    },
  })
);

api.use(function (req, res, next) {
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

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
api.use("/rest/customers", loginRouter);

import employeesRouter from "./routes/employees-routes.js";
api.use("/rest/employees", employeesRouter);

import restaurantLoginRouter from "./routes/restaurant-login-routes.js";
api.use("/rest/restaurant/login", restaurantLoginRouter);

import itemRoutes from "./routes/item-routes.js"
api.use("/rest/items", itemRoutes)

import orderRouter from "./routes/order-routes.js"
api.use("/rest/order", orderRouter)

import categoryRouter from "./routes/categories-routes.js"
api.use("/rest/categories", categoryRouter)