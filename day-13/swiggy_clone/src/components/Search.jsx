import React from 'react'

const Search = ({restaurantDetails,setAllRestArray}) => {

    function handleSearch(searchText){
        // console.log(searchText,"searchText");
        let searchedRest = restaurantDetails.filter((restaurant)=> restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()))
        setAllRestArray(searchedRest)
    }
  return (
    <div>
        <input onChange={(e)=> handleSearch(e.target.value)} className='border w-54 p-2' type="text" placeholder='Search Restaurant here...' />
    </div>
  )
}

export default Search