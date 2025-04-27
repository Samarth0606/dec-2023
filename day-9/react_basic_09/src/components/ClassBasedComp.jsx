import React, { useEffect, useState } from "react";


const ClassBasedComp = () => {

    let [count,setCount] = useState(0);
    useEffect(function(){
        // componentDidMount
        if(count === 0){
            console.log("mai mount hogya");
        }
        // componentDidUpdate
        if(count === 3){
            console.log("mai update hogya");
        }
        // componentWillUnmount
        if(count === 5){
            //cleanup fn (runs betweeen 2 rerenders r5 r6 ke beechme)
            return ()=>{
                console.log("mai unmount hogya");
            }
        }
    } , [count])

  return (
    <div>
        <button onClick={()=>setCount(count+1)}>count: {count}</button>
    </div>
  )
}

export default ClassBasedComp
