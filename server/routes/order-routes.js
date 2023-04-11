import express, { request, Router } from "express";
import mongoose, { Schema } from "mongoose";

const orderRouter = Router();

const orderSchema = new Schema({
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: "items" }],
  customers: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customers",
    required: true,
  },
  orderDate: { type: Date, default: Date() },
  endDate: { type: Date, default: null },
  isDelivered: { type: String, default: "Waiting for Restaurant" },
  totalPrice: { type: Number, default: 0 },
});

mongoose.model("orders", orderSchema);

// mongoose.models.orders.watch().on('change', data => console.log(data))

orderRouter.get("/", async (request, response) => {
  const order = await mongoose.models.orders
    .find()
    .populate({ path: "items", select: "name" })
    .populate({ path: "customers", select: ["fullName", "email"] })
    .exec();
  response.json(order);
});

orderRouter.post("/", async (request, response) => {
  const { items, isDelivered, totalPrice } = request.body;
  const newOrder = new mongoose.models.orders({
    items,
    customers: request.session?.customers?._id,
    isDelivered,
    totalPrice,
  });

  await newOrder
    .save()
    .then((result) => {
      return response.json({ message: result });
    })
    .catch((error) => {
      return response.json({ message: error });
    });
});

orderRouter.patch("/:id", async (request, response) => {
  try {
    if (request.session?.employee.order || request.session?.employee.admin) {
      const order = await mongoose.models.orders.findByIdAndUpdate(
        request.params.id
      );

      //kan ta bort härifrån
      order.endDate = request.body.endDate;
      order.isDelivered = request.body.isDelivered;
      order.totalPrice = request.body.totalPrice;
      await order.save();
      response.status(201).json(order);
    }
  } catch (error) {
    console.error(error);
    response.status(401).json("Unauthorized");
  }
});

export default orderRouter;
