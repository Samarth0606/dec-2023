// // -----------------MEMO--------------------

// import { memo, useState } from "react"


// function Memoo(){
//     let[title, setTitle] = useState("Sam");
//     function handleClick(){
//         setTitle(Math.floor(Math.random()*10))
//     }
//     return(
//         <>
//         <Chotu namee={title} />
//         <button onClick={handleClick} >Chnage naame</button>
//         <Chotu namee="Vohra" />
//         <Chotu namee="Kashish" />
//         <Chotu namee="Maverick" />
//         </>
//     )
// }

// let Chotu = memo(function({namee}){
//     return(
//         <>
//             <h1>My name is: {namee}</h1>
//         </>
//     )
// })

// // function Chotu({namee}){
// //     return(
// //         <>
// //         <h1>My name is: {namee}</h1>
// //         </>
// //     )
// // }
// export default Memoo




// ---------------------DIVIDE AND RULE------------------------------------------
// import { useState } from "react";

// function Memo(){
//     return(
//         <div>
//             <ChotaBhai weight="120" />
//             <BadaBhai weight="180" />
//         </div>
//     )
// }

// function BadaBhai(props){
//     let [wazan,setWazan] = useState(props.weight)
//     return(
//         <>
//             <ChotaBhai weight={wazan} />
//             <button onClick={()=>setWazan(Math.floor(Math.random()*10))} >Change weight</button>
//         </>
//     )
// }

// function ChotaBhai(props){
//     return(
//         <>
//             <h1>I can lift: {props.weight} kgs</h1>
//         </>
//     )
// }

// export default Memo;