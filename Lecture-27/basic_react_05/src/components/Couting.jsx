// import { useState } from "react"

// const Counter = ()=>{

//     let [count,setCount] = useState(0);
//     function handleSub(){
//         console.log(count , "1");        
//         setCount(count-1) //async => baad mei => 0 + 1 = 1
//         setCount(count-1) //async => baad mei => 0 + 1 = 1
//         setCount(count-1) //async => baad mei => 0 + 1 = 1
//         console.log(count , "2");
//     }
//     function handleAdd(){
//         console.log(count , "11");        
//         setCount(count+1) //async => baad mei
//         setCount(count+1) //async => baad mei
//         setCount(count+1) //async => baad mei
//         console.log(count , "22");
//     }

//     return(
//         <>
//         <button onClick={handleSub} >-</button>
//         <h1>Count: {count}</h1>
//         <button onClick={handleAdd} >+</button>
//         </>
//     )
// }

// export default Counter;
// ---------------------------------------------------------

import { useState } from "react"

const Counter = ()=>{

    let [count,setCount] = useState(0);
    function handleSub(){
        console.log(count , "1");        
        setCount((count)=>count-1) //async => baad mei => 0 - 1 = -1
        setCount((count)=>count-1) //async => baad mei => 0 - 1 = -1
        setCount((count)=>count-1) //async => baad mei => 0 - 1 = -1
        // setCount(count-1) //async => baad mei
        console.log(count , "2");
    }
    function handleAdd(){
        console.log(count , "11");        
        setCount((count)=> count+1) //async => baad mei
        setCount((count)=> count+1) //async => baad mei
        setCount((count)=> count+1) //async => baad mei
        // setCount(count+1) //async => baad mei
        console.log(count , "22");
    }

    return(
        <>
        <button onClick={handleSub} >-</button>
        <h1>Count: {count}</h1>
        <button onClick={handleAdd} >+</button>
        </>
    )
}

export default Counter;