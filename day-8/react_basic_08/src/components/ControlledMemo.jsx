import { useMemo, useState } from "react";

function ControlledMemo(){
    let [count,setCount] = useState(0);
    let [inp,setInp] = useState(0);
    function handleChange(e){
        setInp(e.target.value)
    }

    //memoisation of value
    let returnedAns = useMemo(function(){
        let ans = 0;
        for(let i=1;i<=inp;i++){
            console.log("mai chal padha");
            
            ans = ans +i;
        }
        return ans;
    } , [inp])

    return(
        <>
            <input onChange={handleChange} type="text" value={inp} />
            <h1>Sum: {returnedAns} </h1>
            <button onClick={()=>setCount(count+1)} >Counter -{count}</button>
        </>
    )
}

export default ControlledMemo;