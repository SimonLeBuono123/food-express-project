import {response, Router} from "express";
import mongoose, {Schema} from "mongoose"

const orderRouter = Router()

const orderSchema = new Schema(
    {
        items: [{type: mongoose.Schema.Types.ObjectId, ref: "items"}],
        customers: {type: mongoose.Schema.Types.ObjectId, ref: "customers"},
        orderDate: {type: Date, default: Date()},
        endDate: {type: Date, default: null},
        isDelivered: {type: String, default: "Waiting for Restaurant"},
        totalPrice: {type: Number, default: 0}
    }
)

mongoose.model('orders', orderSchema)

orderRouter.get('/', async (request, response) =>{
        const order = await mongoose.models.orders.find()
            .populate({path: 'items', select: 'name'})
            .populate({path: 'customers', select: 'fullName'})
            .exec()
        response.json(order)
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

                return response.json({message: result})}).catch((error)=>{
                        return response.json({message: error})
                })

})

export default orderRouter