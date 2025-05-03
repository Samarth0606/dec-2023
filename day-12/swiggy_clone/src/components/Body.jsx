import ApiCalling from "./ApiCalling";
import RestaurantCard from "./RestaurantCard";

const Body = ()=>{

    let restaurantDetails = ApiCalling();
     
    return(
        <div>
            <h1 className="font-bold text-xl m-10">Restaurants with online food delivery</h1>
            <button className="border rounded w-1/12 ml-20">Rating+</button>

            <div className="flex flex-wrap w-10/12 m-auto">
                <RestaurantCard restArray={restaurantDetails} />
            </div>
        </div>
    )
}

export default Body;