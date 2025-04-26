import { useState } from "react"

function States(){

    let [namee,setNamee] = useState("samarth")
    // let [todos , setTodos] = useState({
    //                             task: "idle",
    //                             web: "developer",
    //                             isDone: false
    //                         })

    // function handleTodo(){
    //     setTodos(()=>{
    //         return{
    //             task: "office go",
    //             web: "scrum master",
    //             idDone: true
    //         }
    //     })
    // }
    return (
        <>
           hello from {namee}
           <button onClick={()=> setNamee("lolipop")}>Click me</button>
           {/* <button onClick={handleTodo}>Click 2</button> */}
        </>
    )
}

export default States;