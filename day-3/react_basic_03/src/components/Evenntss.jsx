import React from 'react'

const Evenntss = () => {
    function handleArgument(x,y){
        console.log(x+y);
    }
    function handleClick1(){
        console.log("hello brother");
    }
    function handleClick2(){
        console.log("hello sister");
    }
  return (
    <div>
        {/* way-1 */}
        <button onClick={handleClick1}>Click me brother</button>
        <button onClick={handleClick2}>Click me sister</button>
        {/* way-2 */}
        <button onClick={()=>handleArgument(10,20)} >click with arguments</button>
    </div>
  )
}

export default Evenntss