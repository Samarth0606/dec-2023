import mongoose from 'mongoose';

const restSchema = new mongoose.Schema({
  name: String,
  imgUrl: String, 
  rating:  String, 
  cuisines: String, 
  deliveryTime: String
})

const RestaurantModel = mongoose.model('Restaurants' , restSchema)

export default RestaurantModel;