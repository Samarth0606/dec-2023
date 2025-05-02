import { useContext, useState } from "react"
import { CountContext } from "./Context"


function PropDrilling(){
    let [count,setCount] = useState(0)
    return(
        <div>
            <CountContext.Provider value={count}>
                <Counter setCount={setCount}  />
            </CountContext.Provider>
           
            {/* <Button count={count} setCount={setCount} /> */}
        </div>
    )
}
function Counter({setCount}){
    return(
        <>
            <CounterRender  />
            <Button  setCount={setCount} />
        </>
    )
}
function CounterRender(){
    let count = useContext(CountContext)
    return(
        <>
        <h1>Count: {count}</h1>
        </>
    )
}
function Button({ setCount}){
    let count = useContext(CountContext)
    return(
        <div>
            <button onClick={()=>setCount(count+1)} >Increment</button>
            <button onClick={()=>setCount(count-1)} >Decrement</button>
        </div>
    )
}

export default PropDrilling