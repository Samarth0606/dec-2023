
import React, { memo, useState } from "react"

let Chotu = memo(function({namee}){
    return(
        <>
            <h1>My name is: {namee}</h1>
        </>
    )
})

function Memoo(){
    let[title, setTitle] = useState("Sam");
    function handleClick(){
        setTitle(Math.floor(Math.random()*10))
    }
    return(
        <div>
            <Chotu namee={title} />
            <button onClick={handleClick} >Chnage naame</button>
            <Chotu namee="Vohra" />
            <Chotu namee="Kashish" />
            <Chotu namee="Maverick" />
        </div>
    )
}


export default Memoo
