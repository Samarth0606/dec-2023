import { memo, useCallback, useState } from "react";

function Sam(){

    let [count, setCount] = useState(0)
    // let a = 100;
    // function a(){
    //     console.log("i am a fn");
    // }
    //remembers the fn
    let a = useCallback(function(){
        console.log("i am a fn");
    } , [])

    return(
        <>
            <Demo val={a}  />
            <button onClick={()=>setCount(count+1)} >Increment: {count}</button>
        </>
    )
}

let Demo = memo(function({val}){
    console.log("i am don");
    
    return(
        <>
            <h1>Hello i am {val} </h1>
        </>
    )
})

// function Demo({val}){
//     return(
//         <>
//             <h1>Hello i am {val} </h1>
//         </>
//     )
// }


export default Sam;