// import { useState } from "react"

// import { useRef, useState } from "react"

// function Refff2(){

//     let [count,setCount] = useState(0);
//     function handleSub(){
//         console.log("- hua hai" , count); 
//         setCount(count-1)
//     }
//     function handleAdd(){
//         console.log("+ hua hai" , count); 
//         setCount(count+1)
//     }

//     return(
//         <>
//         <button onClick={handleSub}>-</button>
//         <h1>{count}</h1>
//         <button onClick={handleAdd}>+</button>
//         </>
//     )
// }



// export default Refff2

// ------------------------------------------------------


import { useRef, useState } from "react"

function Refff2(){

    let [count,setCount] = useState(0);
    function handleAdd(){
        console.log("+ hua hai" , count); 
        setCount(count+1)
    }


    let countRef = useRef(0);
    function handleIncrement(){
        console.log(countRef.current);
        countRef.current = countRef.current + 1
    }

    return(
        <>
           <button onClick={handleAdd}> {count} +</button> 
           <h1>Count: {countRef.current}</h1>
           <button onClick={handleIncrement}>Click Ref</button>
        </>
    )
}



export default Refff2

