import { useState } from "react";

function Sam(){
    let [namee,setNamee] = useState("samarth vohra")
    function handleClick(){
        setNamee(Math.floor(Math.random()*10))
    }

    function BadaComponent(){
        return (
            <div>
                <button onClick={handleClick}>Click</button>
                <h1>Name:{namee}</h1>
            </div>
        )
    }

    return(
        <div>
            <BadaComponent />
            <BadaComponent />
        </div>
    )  
}


export default Sam;
