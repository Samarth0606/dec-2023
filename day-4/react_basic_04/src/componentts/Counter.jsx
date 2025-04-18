import { useState } from "react"

let Counter = ()=>{
    
    let [count , setCount] = useState(0);
    function handleAdd(){
        setCount(count+1)
    }
    function handleSub(){
        setCount(count-1)
    }

    return(
        <>
            <button onClick={handleSub}>-</button>
            <h1> { count }</h1>
            <button onClick={handleAdd}>+</button>
        </>
    )
}
export default Counter;