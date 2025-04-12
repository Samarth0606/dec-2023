
// const Person = (props) => {
// //upar -> console ✅
// console.log(props); //object


// //neeche -> console ❌
//   return (
//     <div>
//         <h1>Name: {props.name}</h1>
//         <h1>Age: {props.age}</h1>
//         <h1>FavColor: {props.favColor}</h1>
//     </div>
//   )
// }

// export default Person


// ------------------------------------------------

const Person = ({name,age,favColor}) => {
//upar -> console ✅


//neeche -> console ❌
  return (
    <div>
        <h1>Name: {name}</h1>
        <h1>Age: {age}</h1>
        <h1>FavColor: {favColor}</h1>
    </div>
  )
}

export default Person

