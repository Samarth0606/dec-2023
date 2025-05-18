import RestaurantModel from "./models/Restaurant.model.js"

const dummyArr = [
  {
    "name": "Burger King 2",
    "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/f67ccf11-0c7e-4ff6-aeb0-1b20304f6783_457403.jpg",
    "rating": "4.4",
    "cuisines": "Burger, Americans",
    "deliveryTime": "20-25 mins",
  },
  {
    "name": "Magic Momo 2",
    "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/dh0qsuqritnmbncwrni3",
    "rating": "4.3",
    "cuisines": "Momos, Chinese",
    "deliveryTime": "60-65 mins",
  },
  {
    "name": "Burger King 2",
    "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/f67ccf11-0c7e-4ff6-aeb0-1b20304f6783_457403.jpg",
    "rating": "4.4",
    "cuisines": "Burger, Americans",
    "deliveryTime": "20-25 mins",
  },
  {
    "name": "mera bhai King 2",
    "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/f67ccf11-0c7e-4ff6-aeb0-1b20304f6783_457403.jpg",
    "rating": "4.4",
    "cuisines": "Burger, Americans",
    "deliveryTime": "20-25 mins",
  },
  {
    "name": "tolly ki tapli 2",
    "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/f67ccf11-0c7e-4ff6-aeb0-1b20304f6783_457403.jpg",
    "rating": "4.4",
    "cuisines": "samosa, Nagpur",
    "deliveryTime": "20-25 mins",
  }
]

export async function seedDB(){
    await RestaurantModel.insertMany(dummyArr);
    console.log("DB seeded");
}