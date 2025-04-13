
// const Random = () => {

//     let magicNum = 7;
//     let rn = Math.floor(Math.random()*10)
//     let el;
//     if(rn === magicNum){
//         el = <h1>Lucky 7</h1>
//     }else{
//         el = <h1>Better luck next time </h1>
//     }

//   return (
//     <div>
//         {el} - {rn}
//     </div>
//   )
// }

// export default Random

// ----------------------------------------

const Random = () => {

    let magicNum = 7;
    let rn = Math.floor(Math.random()*10)

  return (
    <div>
        {
            rn === magicNum ? <h1>Lucky 7</h1> : <h1>Next time</h1>
        }
        {rn}
    </div>
  )
}

export default Random