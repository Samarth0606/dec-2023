import { memo, useCallback, useState } from "react";

function Callbackk(){

    let [count,setCount] = useState(0);

    // let abc = 10;
    // memoise the fn's
    let abc = useCallback(function abc(){
        console.log("fn hu abc");
    } , [])
    

    return(
        <>
            <Lallu b={abc} />
            <button onClick={()=>setCount(count+1)} >Counter -{count}</button>  
        </>
    )
}

let Lallu = memo(function({b}){
    console.log("mai b hu chal dia");
    return(
        <>
        <h1> I m {b}</h1>
        </>
    )
})



export default Callbackk;