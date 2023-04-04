import Router from "express";
import mongoose, { Schema } from "mongoose";
import encrypt from "../utilities/encrypt.js";

const employeesRouter = Router();

const employeeSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  order: { type: Boolean, required: true },
  admin: { type: Boolean, required: true, default: false },
});

mongoose.model("employees", employeeSchema);

employeesRouter.post("/", async (request, response) => {
  const { email, password, order, admin } = request.body;

  const newEmployee = new mongoose.models.employees({
    email,
    password: encrypt(password),
    order,
    admin,
  });
  console.log(newEmployee?.password);
  await newEmployee
    .save()
    .then((result) => {
      return response.status(201).json({
        message: "Successfully created",
        data: { result },
      });
    })
    .catch((error) => {
      //11000 : duplicate key error (i mondoDB), trying to have 2 unique items
      if (error.name === "MongoServerError" && error.code === 11000) {
        return response.status(400).json({
          message: "user already exists.",
          data: { error },
        });
      }
      return response.status(400).json({
        message: "Error, see data for details",
        data: { error },
      });
    });
});

export default employeesRouter;
