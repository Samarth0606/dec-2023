import { useState } from "react"

const Random = ()=>{

    let [target,setTarget] = useState("balle balle")
    
    function handleChange(){
      setTarget(Math.floor(Math.random()*10))
    }

    return(
        <div>
            <button onClick={handleChange}>Clickkk</button>
            <h1>target : {target}</h1>
        </div>
    )
}

export default Random;