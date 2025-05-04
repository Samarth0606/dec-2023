import { useEffect, useState } from "react";
import ApiCalling from "./ApiCalling";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";

const Body = ()=>{

    let restaurantDetails = ApiCalling();
    const [allRestArray,setAllRestArray] = useState(restaurantDetails);
    const [isClicked, setIsClicked] = useState(false)
    const [isClicked2, setIsClicked2] = useState(false)

    useEffect(()=>{
        if(restaurantDetails && restaurantDetails.length){
            setAllRestArray(restaurantDetails)
        }
    } , [restaurantDetails])
    
    //filter
    function filterTopRatedRest(restaurantDetails){
        let ratingFilteredArr = restaurantDetails.filter((restaurant)=> restaurant.info.avgRating >= 4.6)
        // console.log(ratingFilteredArr , "ratingFilteredArr");
        setAllRestArray(ratingFilteredArr)
        setIsClicked(true);
        setIsClicked2(false);
    }
    // reset
    function resetFilter(restaurantDetails){
        setAllRestArray(restaurantDetails)
        setIsClicked2(true)
        setIsClicked(false)
    }
     
    return(
        <div>
            <h1 className="font-bold text-xl m-10">Restaurants with online food delivery</h1>
            <div className="flex">
                <button onClick={()=>filterTopRatedRest(restaurantDetails)} className={isClicked ? "bg-amber-200 border rounded w-1/12 ml-20" : "border rounded w-1/12 ml-20" }>Rating 4.6+</button>
                <button onClick={()=>resetFilter(restaurantDetails)} className={isClicked2 ? "bg-amber-200 border rounded w-1/12 ml-20" : "border rounded w-1/12 ml-20" }>Reset</button>

                <div className="mx-10">
                    <Search restaurantDetails={restaurantDetails} setAllRestArray={setAllRestArray} />
                </div>
            </div>

            <div className="flex flex-wrap w-10/12 m-auto">
                <RestaurantCard restArray={allRestArray} />
            </div>
        </div>
    )
}

export default Body;