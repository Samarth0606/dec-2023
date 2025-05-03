
const RestaurantCard = ({restArray}) => {
  return (
    restArray.map((restDetails)=>{
        return(
            <div className="m-8">
                <img className="w-58 h-42 rounded-2xl" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/6513abee-f904-4a0e-9b49-90d1cc29551c_1003414.jpg" alt="" />
                <h1 className="font-bold">{restDetails.name}</h1>
                <span className="font-bold" >{restDetails.rating}</span>
                <span className="mx-3">{restDetails.time}</span>
                <p> {restDetails.cuisines}</p>
                <p>{restDetails.place}</p>
            </div>

        )
    })
  )
}

export default RestaurantCard