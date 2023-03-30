import Router from "express"
import mongoose, {Schema} from "mongoose";

const router = Router()

const testSchema = new Schema({
    testPro: String,
    amount: Number
})

mongoose.model('tests', testSchema)



router.post("/", async (request, response) => {
    const test = new mongoose.models.tests();
    test.testPro = request.body.testPro;
    test.amount = request.body.amount;
    await test.save();
    response.status(201).json({ result: "created" });
});


/*
router.post("/", (request, response)=>{

    const homeOwners = request.body
    let newHomeOwners

    newHomeOwners = new mongoose.models.test({
        testPro: request.body.testPro,
        amount: request.body.amount,
    })
})
*/

/*
router.post('/', async (request, response)=>{
    const homeOwner = new mongoose.models.homeOwners()
    homeOwner.name = request.body.name
    homeOwner.rating = request.body.rating
    homeOwner.email = request.body.email
    homeOwner.password = getHash(request.body.password)

    await homeOwner.save()
    response.status(201).json(homeOwner)
})
*/
export default router