import React, { useState } from 'react'
const A = () => {
let [count,setCount] = useState(0);
  return (
    <div>
        <h1>A</h1>
        <B count={count} />
    </div>
  )
}
const B = ({count}) => {
  return (
    <div>
        <h1>B</h1>
        <C count={count}/>
    </div>
  )
}
const C = ({count}) => {
  return (
    <div>
        <h1>C</h1>
        <D count={count}/> 
    </div>
  )
}
const D = ({count}) => {
  return (
    <div>D: {count}</div>
  )
}

export default A