import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ApiCalling = () => {
  let [allRestaurantArr,setAllRestaurantArr] = useState([])
    const API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    useEffect(()=>{
        async function calling(){
            let resp = await axios.get(API);
            setAllRestaurantArr(resp.data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        }
        calling()
    } , [])

  return allRestaurantArr;
}

export default ApiCalling