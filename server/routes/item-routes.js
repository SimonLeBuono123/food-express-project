import Router from "express";
import mongoose, {Schema} from "mongoose";


const itemRoutes = Router();



const itemSchema = new Schema(
    {
        name: String,
        ingredients: String,
        categories: {type: mongoose.Schema.Types.ObjectId, ref: "categories" },
        price: Number
    }
)

mongoose.model('items', itemSchema)


itemRoutes.post('/', async(request, response)=> {
    const {name, ingredients, categories, price} = request.body
    try {
    const newItem = new mongoose.models.items({
        name,
        ingredients,
        categories,
        price
    })
    await newItem.save()
        response.json(newItem)
    }catch(error){
        console.error(error)
    }

})


itemRoutes.get('/', async (request, response) => {
    const item = await mongoose.models.items.find().populate('categories').exec()
    response.json(item)
})



export default itemRoutes