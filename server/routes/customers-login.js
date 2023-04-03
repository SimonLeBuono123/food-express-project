import Router from "express";
import encrypt from "../utilities/encrypt.js";
import mongoose from "mongoose";

const loginRouter = Router()

loginRouter.post('/login', async(request, response)=> {
    const {email, password} = request.body
    const customer = await mongoose.models.customers.findOne({
        email,
        password: encrypt(password)
    })
    if(customer){
        response.status(201)
        request.session.customers = customer
        response.json({'loggedIn': true})
    } else {
        response.status(401)
        response.json({'loggedIn': false})
    }
})

loginRouter.get('/login', async(request, response)=> {

    if(request.session?.customers){
        let customer = await mongoose.models.customers.findOne({
            email: request.session.customers.email,
            password: request.session.customers.password
        })
        console.log(request.session.customers.name)
        if(customer){
            response.json({
                fullName: request.session.customers.fullName,
                email: request.session.customers.email,
                loggedIn: true
            })
            return
        }
    }
    response.json({'loggedIn': false})

})

loginRouter.delete('/login', (request, response) => {
    request.session.destroy(() => {
        response.json({loggedIn: false})
    })

})

export default loginRouter