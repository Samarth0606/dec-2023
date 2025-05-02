import { useEffect, useState } from "react"

const Counter = () => {

    let [count,setCount] = useState(0);
    useEffect(function(){

        let id = setInterval(function(){
            setCount(count+1)
        } , 1000)

        //cleanup
        return ()=>{
            clearInterval(id)
        }

    } , [count])

  return (
    <div>Counter :{count} </div>
  )
}

export default Counter