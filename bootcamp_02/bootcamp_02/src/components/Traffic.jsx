import { Fragment, useEffect, useState } from "react"

function Traffic() {

    const [color,setColor] = useState("red");

    useEffect(()=>{
        let id = setInterval(()=>{
            setColor(prev =>{
                if(prev === "red") return "green"
                else if(prev === "green") return "yellow"
                return "red"
            })
        } , 2000)
        return ()=> clearInterval(id)
    } , [])

  return (
    <div style={{width:"110px" , padding:"10px", backgroundColor:"black" , margin:"0 auto"}} >
        <div style={{color:"white"}}> 🚦 Traffic Light</div>
        <Light color="red"    active={color==="red"} />
        <Light color="yellow" active={color==="yellow"} />
        <Light color="green"  active={color==="green"} />
    </div>
  )
}

export default Traffic


function Light({color,active}){
    return(
        <>
            <div style={{
                width:"100px",
                height:"100px",
                borderRadius:'50%',
                backgroundColor:color,
                opacity:active ? 1:0.3
            }} >

            </div>
        </>
    )
}