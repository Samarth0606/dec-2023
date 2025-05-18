import { createRestaurant } from "../controllers/restaurant.controller.js";


export function restRoutes(app){
    app.post('/api/restaurant' , createRestaurant)
}