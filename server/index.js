import express from "express";
import mongoose from "mongoose";
import { password } from "./password.js";

const api = express();
const port = 3030;
const uri = `mongodb+srv://food-project:${password}@food-cluster0.a9dyz1j.mongodb.net/?retryWrites=true&w=majority`;

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