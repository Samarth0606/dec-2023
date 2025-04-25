import { memo, useState } from "react";

function Memoo(){
    let [title,setTitle] = useState("samarth");
    function handleClick(){
        setTitle(Math.floor(Math.random()*10))
    }
    return(
        <div>
            <MyMemoo namee = {title} />
            <button onClick={handleClick}>click</button>
            <MyMemoo namee = "vohra" />
            <MyMemoo namee = "maverick" />
        </div>
    )
}
let MyMemoo = memo( function ({namee}){
    return(
        <div>
            <h1>Naam is: {namee}</h1>
        </div>
    )
} )

// function MyMemoo({namee}){
//     return(
//         <div>
//             <h1>Naam is: {namee}</h1>
//         </div>
//     )
// }


export default Memoo;