// import { useState } from "react";
import Counter from "./componentts/Counter";
import Random from "./componentts/Randomm";
const App = ()=>{
  // let [username,setUsername] = useState("samarth");

  // function handleClick(){
  //   console.log(username,"1");
  //   setUsername("anonymous")
  //   console.log(username,"2");
  // }

  return (
    <div>
      {/* <button onClick={handleClick} >Click ME!!</button>
      <button onClick={()=> handleClick()} >Click ME!!</button>
      <h1>Name: {username} </h1> */}

      {/* <Random /> */}
      <Counter />
    </div>
  )
}

export default App;