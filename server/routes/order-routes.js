import express, {request, Router} from "express";
import mongoose, {Schema} from "mongoose"

const orderRouter = Router()

const orderSchema = new Schema({
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "items" }],
    customers: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "customers",
      required: true,
    },
    placedDate: { type: Date, default: Date() },
    pickupDate: { type: Date, default: null },
    isAccepted: {type: Boolean, default: false},
    isDelivered: { type: Boolean, default: false },
    totalPrice: { type: Number, default: 0 },
  });

mongoose.model('orders', orderSchema)

// mongoose.models.orders.watch().on('change', data => console.log(data))

orderRouter.get('/', async (request, response) =>{
        const order = await mongoose.models.orders.find()
            .populate({path: 'items', select: 'name'})
            .populate({path: 'customers', select: ['fullName', 'email']})
            .exec()
        response.json(order )
})

orderRouter.post('/', async(request, response)=> {
        const {items, isDelivered, totalPrice} = request.body
        const newOrder = new mongoose.models.orders({
                items,
                customers: request.session?.customers?._id,
                isDelivered,
                totalPrice
        })

        await newOrder.save().then((result)=> {
                        return response.json({message: result})
        }).catch((error)=>{
                        return response.json( {message: error})
                })


})



export default orderRouter