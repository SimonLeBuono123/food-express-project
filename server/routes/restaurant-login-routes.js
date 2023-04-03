import Router from "express";

const restaurantLoginRouter = Router()

//crypto
import encrypt from "../utilities/encrypt.js";


import mongoose from "mongoose";

restaurantLoginRouter.post('/', async (request, response) => {
    let employee = await mongoose.models.employees.findOne({
        email: request.body.email,
        password: encrypt(request.body.password)
    })

    if (employee) {
        response.status(200)
        request.session.employee = employee
        response.json({loggedIn: true})
    } else {
        response.status(401)
        response.json({loggedIn: false})
    }
})

restaurantLoginRouter.get('/', async (request, response) => {
    if (request.session?.employee) {
//first check with database
        let employee = await mongoose.models.employees.findOne({
            email: request.session.employee.email,
            password: request.session.employee.password
        })
        if (employee) {
//respond
            response.status(401)
            response.json({
                email: request.session.employee.email,
                loggedIn: true
            })
            return
        }
    }
    response.status(401)
    response.json({loggedIn: false})
})

restaurantLoginRouter.delete('/', async (request, response) => {

    delete (request.session.employee)
    response.status(401)
    response.json({loggedIn: false})
})

export default restaurantLoginRouter