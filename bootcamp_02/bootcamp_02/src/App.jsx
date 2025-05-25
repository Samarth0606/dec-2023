// import React from "react";

// function App(){
//   return(
//     <React.Fragment>

//     </React.Fragment>
//   )
// }

// export default App;

// ---------------------------------------------

// import React, { Fragment, useState } from "react";


// function App(){

//   const [count,setCount] = useState(0);

//   function handleDec(){setCount(count-1)}
//   function handleInc(){setCount(count+1)}
//   return(
//     <Fragment>
//       <button onClick={handleDec}>-</button>
//       <h1>Count: {count}</h1>
//       <button onClick={handleInc} >+</button>
//     </Fragment>
//   )
// }

// export default App;

// -------------------------------------------------

// import React, { Fragment, useState } from "react";


// function App(){
  
//   const [count,setCount] = useState(0);

//   return(
  //     <Fragment>
  //       <button onClick={()=>setCount(count-1)}>-</button>
  //       <h1>Count: {count}</h1>
  //       <button onClick={()=>setCount(count+1)} >+</button>
  //     </Fragment>
  //   )
  // }
  
  // export default App;
  
  
// -------------------------------------------------

import React from "react";
import Timer from "./components/Timer";
import OtpGenerator from "./components/OtpGenerator";
import Product from "./components/Product";
import Traffic from "./components/Traffic";

function App(){
  return(
   <>
    {/* <Timer /> */}
    {/* <OtpGenerator /> */}
    {/* <Product /> */}
    <Traffic />
   </>
  )
}

export default App;