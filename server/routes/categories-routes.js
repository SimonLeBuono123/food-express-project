import Router from "express";
import mongoose, { Schema } from "mongoose";

const categoryRoutes = Router();

const categorySchema = new Schema({
    name: { type: String, unique: true, primaryKey: true}}
    ,{collection:  "categories" }
  )
  mongoose.model('categories', categorySchema)


categoryRoutes.get("/", async (request, response) => {
  const categories = await mongoose.models.categories.find()
  response.json(categories);
});


export default categoryRoutes;
