// const Events = ()=>{
// // upar vaali duniya
// let pen = "Welcome Samarth"; //varible 
// function handleClick(){
//     console.log(pen ,"1");
//     pen = "anonymous"
//     console.log(pen ,"2");
// }

import { useState } from "react";

// // neeche vaali duniya
//     return (
//         <>
//             <h1> {pen} </h1>
//             <button onClick={handleClick} >Click me</button>
//         </>
//     )
// }

// export default Events;


// ----------------------------------------------------------


const Events = ()=>{
// upar vaali duniya
// let pen = "Welcome Samarth"; //varible 
let [pen,setPen] = useState("Welcome Samarth")//hook

function handleClick(){
    console.log(pen ,"1");
    // pen = "anonymous"
    setPen("anonymous") //async beh. => pehle baaki kam nipta lo
    console.log(pen ,"2");
}

// neeche vaali duniya
    return (
        <>
            <h1> {pen} </h1>
            <button onClick={handleClick} >Click me</button>
        </>
    )
}

export default Events;


