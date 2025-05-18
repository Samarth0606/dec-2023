import RestaurantModel from "../models/Restaurant.model.js";

export async function createRestaurant(req,res){
    try{
        let {name,imgUrl,rating,cuisines,deliveryTime} = req.body;
        const newRest = await RestaurantModel.create({name,imgUrl,rating,cuisines,deliveryTime})
        return res.status(201).json(newRest);
    }
    catch(err){
        return res.status(500).json({message: err.message})
    }
}
