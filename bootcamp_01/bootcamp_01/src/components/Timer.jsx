// import { Fragment, useEffect, useState } from "react";

// function Timer(){

//     const [time,setTime] = useState(0);

//     useEffect(()=>{
//         let id = setInterval(()=>{
//             setTime(time+1)
//         } , 1000)
//         return ()=> clearInterval(id)
//     } , [time])

//     return(
//         <Fragment>
//             <h1>Timer: {time}</h1>
//         </Fragment>
//     )
// }

// export default Timer;

// ----------------------------------------------
//jugaad
import { Fragment, useEffect, useState } from "react";

function Timer(){

    const [time,setTime] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setTime(time+1)
        } , 1000)
    } , [time])

    return(
        <Fragment>
            <h1>Timer: {time}</h1>
        </Fragment>
    )
}

export default Timer;