import { useEffect, useState } from "react";

const Effects = ()=>{
    console.log("mai render hogya");
    
    let [count,setCount] = useState(0);
    // let [count2,setCount2] = useState(0); // for example only

    // useEffect(()=>{
    //     console.log("i am use effect");
    // } , [count , count2])

    useEffect(()=>{
        setTimeout(function(){
            console.log("hello from settimeout");
        } , 5000)
    } , [])


    // dependency array is not given => component rendering, leads to rendering of useeffect as well
    useEffect(()=>{
        console.log("i am use effect");
    } )

    return (
        <>
        <button onClick={()=>setCount(count-1)} >-</button>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)} >+</button>

        </>
    )
}

export default Effects;