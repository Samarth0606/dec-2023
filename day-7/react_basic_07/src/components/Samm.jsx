import { useState } from "react";

function Samm(){
    return(
        <div>
            <BadaComponent naam="satish" />
            <Head naam="bhau bhau" />
        </div>
    )  
}

function Head(props){
    return(
        <h1>MY NAME IS " {props.naam}</h1>
    )
}

function BadaComponent(props){
    let [namee,setNamee] = useState(props.naam)
    function handleClick(){
        setNamee(Math.floor(Math.random()*10))
    }

    return (
        <div>
            <button onClick={handleClick}>Click</button>
            <Head naam={namee} />
        </div>
    )
}

export default Samm;
