import { useMemo, useState } from "react"

const UseMemooo = () => {
    let [inp,setInp] = useState(0);
    let [count,setCount] = useState(0);
    function handleClick(){
        setCount(count+1)
    }
    function handleInput(e){
        setInp(e.target.value)
    }

    let memoCount = useMemo(()=>{
        let ans = 0;
        for(let i = 1 ; i<= inp ; i++){
            console.log("hello ji");
            ans = ans + i;
        }
        return ans;
    } , [inp])

  return (
    <div>
        <input onChange={handleInput} type="text" value={inp} />
        <h1>Sum: {memoCount} </h1>
        <button onClick={handleClick}> Counter-{count} </button>
    </div>
  )
}

export default UseMemooo