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


export async function fetchRestaurant(req,res){
    try{
       const allRestaurants = await RestaurantModel.find();
       if(!allRestaurants){
        return res.status(404).json({message:"Restaurants are not available"})
       }
       return res.status(200).json(allRestaurants)
    }
    catch(err){
        return res.status(500).json({message: err.message})
    }
}

export async function updateRestaurant(req,res){
    try{
       let {id} = req.params;
       let updatedRest = await RestaurantModel.findByIdAndUpdate(id, req.body , {new:true})
       res.status(200).json(updatedRest)
    }
    catch(err){
        return res.status(500).json({message: err.message})
    }
}


export async function deleteRestaurant(req,res){
    try{
       let {id} = req.params;
       let deletedRest = await RestaurantModel.findByIdAndDelete(id)
       res.status(200).json(deletedRest)
    }
    catch(err){
        return res.status(500).json({message: err.message})
    }
}
