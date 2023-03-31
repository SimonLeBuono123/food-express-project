import Router from "express";
import mongoose, {Schema} from "mongoose";
import encrypt from "../utilities/encrypt.js";

const customersRouter = Router();

const customerSchema = new Schema({
    fullName: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true}
});

mongoose.model("customers", customerSchema);


customersRouter.post("/", async (request, response) => {
    const {fullName, email, password} = request.body;
    const newCustomer = new mongoose.models.customers({
        fullName,
        email,
        password: encrypt(password)
    });

    await newCustomer
        .save()
        .then((result) => {
            return response.status(201).json({
                message: "Successfully created",
                data: {result},
            });
        })
        .catch((error) => {
            //11000 : duplicate key error (i mondoDB), trying to have 2 unique items
            if (error.name === "MongoServerError" && error.code === 11000) {
                return response.status(400).json({
                    message: "user already exists.",
                    data: {error},
                });
            }
            return response.status(400).json({
                message: "Error, see data for details",
                data: {error},
            });
        });
});

export default customersRouter