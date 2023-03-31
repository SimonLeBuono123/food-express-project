import Router, {request, response} from "express";
import mongoose, { Schema } from "mongoose";

const testRouter = Router();

const testSchema = new Schema({
  testPro: { type: String, unique: true, required: true }, //required: måste skriva rätt property namn, e.g vid post
  amount: Number,
});

mongoose.model("tests", testSchema);

testRouter.get("/", async (request, response)=> {
  const test = await mongoose.models.tests.find()
  response.json(test)
})

testRouter.post("/", async (request, response) => {
  const { testPro, amount } = request.body; //skickar json properties
  const test = new mongoose.models.tests({
    testPro,
    amount,
  });

  await test
    .save()
    .then((result) => {
      if (result.testPro !== null && result.amount !== null) {
        return response.status(201).json({
          message: "Successfully created",
          data: { result },
        });
      }
    })
    .catch((error) => {
        //11000 : duplicate key error (i mondoDB), trying to have 2 unique items
      if (error.name === "MongoServerError" && error.code === 11000) {
        return response.status(400).json({
          message: "test already exists.",
          data: { error },
        });
      }
      return response.status(400).json({
        message: "Error, see data for details",
        data: { error },
      });
    });
});

export default testRouter;
