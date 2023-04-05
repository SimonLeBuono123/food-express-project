import Router from "express";
import mongoose, { Schema } from "mongoose";
import restaurantLoginRouter from "./restaurant-login-routes.js";

const itemRoutes = Router();

const itemSchema = new Schema({
  name: String,
  ingredients: String,
  categories: { type: mongoose.Schema.Types.ObjectId, ref: "categories" },
  price: Number,
});

mongoose.model("items", itemSchema);

itemRoutes.post("/", async (request, response) => {
  const { name, ingredients, categories, price } = request.body;
  try {
    const newItem = new mongoose.models.items({
      name,
      ingredients,
      categories,
      price,
    });
    await newItem.save();
    response.json(newItem);
  } catch (error) {
    console.error(error);
  }
});

itemRoutes.get("/", async (request, response) => {
  const item = await mongoose.models.items.find().populate("categories").exec();
  response.json(item);
});

itemRoutes.delete("/:id", async (request, response) => {
  try {
    if (request.session?.employee.admin) {
      const item = await mongoose.models.items.findByIdAndDelete(
        request.params.id
      );

      response.status(200);
      response.json(item);
    } else {
      response.status(401).json("Unauthorized");
    }
  } catch (error) {
    console.error(error);
    response.status(404).json("not found");
  }
});

export default itemRoutes;
