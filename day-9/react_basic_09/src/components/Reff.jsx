// import { useEffect } from "react";

// function Reff(){

//     useEffect(function(){
//         setTimeout(function(){
//             document.querySelector('#salary').innerHTML = 40000;
//         } , 3000)
//     } , [])

//     let salary = 100000;
//     return(
//         <>
//         <h1>Salary is: <span id="salary"> {salary} </span> Rupees</h1>
//         </>
//     )
// }

// export default Reff;

// --------------------------------------------------------------------


import { useEffect, useRef } from "react";

function Reff(){

    let spanEl = useRef()

    useEffect(function(){
        setTimeout(function(){
            // document.querySelector('#salary').innerHTML = 40000; //DOM
            spanEl.current.innerHTML = "40000"

        } , 3000)
    } , [])

    let salary = 100000;
    return(
        <>
        <h1>Salary is: <span ref={spanEl}> {salary} </span> Rupees</h1>
        </>
    )
}

export default Reff;
