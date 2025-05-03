import RestaurantCard from "./RestaurantCard";

const Body = ()=>{

    let restaurantDetails = [
        {
            name:"Pizza Hut", 
            rating:"4.2", 
            time:"20-25mins", 
            cuisines:"Pizza, Desi",
            place:"Punjabi Bagh",
        },
        {
            name:"Burger House", 
            rating:"4", 
            time:"50-55mins", 
            cuisines:"Beverages, Burger",
            place:"Karol Bagh",
        },
    ]
    return(
        <div>
            <h1 className="font-bold text-xl m-10">Restaurants with online food delivery</h1>
            <button className="border rounded w-1/12 ml-20">Rating+</button>

            <div className="flex flex-wrap w-10/12 m-auto">
                <RestaurantCard restArray={restaurantDetails} />
                {/* <RestaurantCard name="Food of Indians" />
                <RestaurantCard name="The Burger House" />
                <RestaurantCard name="Famous Lassi" />
                <RestaurantCard name="The Kohli's" />
                <RestaurantCard name="KFC" />
                <RestaurantCard name="Burger King" />
                <RestaurantCard name="Domino's" /> */}
            </div>
        </div>
    )
}

export default Body;