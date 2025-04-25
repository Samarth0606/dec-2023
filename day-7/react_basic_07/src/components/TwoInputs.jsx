import { useMemo, useState } from "react"

const TwoInputs = () => {
    let [count, setCount] = useState(0);
    let [inp1,setInp1] = useState(0);
    let [inp2,setInp2] = useState(0);
    function handleInput1(e){
        setInp1(e.target.value)
    }
    function handleInput2(e){
        setInp2(e.target.value)
    }
    let memoVal = useMemo(()=>{
        let ans = parseInt(inp1) + parseInt(inp2);
        return ans;
    },[inp1,inp2])
    return (
    <div>
        <input onChange={handleInput1} type="text" value={inp1}/>
        <input onChange={handleInput2} type="text" value={inp2}/>
        <h1>Sum : {memoVal}</h1>
        <button onClick={()=>setCount(count+1)}>Click : {count}</button>
    </div>
  )
}

export default TwoInputs