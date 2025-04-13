import React from 'react'

const Hello = () => {
    let obj = {
        a:10,
        b:20,
        c: "hello"
    }
    let arr = [10,20,30,40,50]
  return (
    <div>
        <h1>object1 : {obj.a}</h1>
        <h1>object2 : {obj.b}</h1>
        <h1>object3 : {obj.c}</h1>
        <h1> array:{arr}</h1>
        <h1> array:{arr["0"]}</h1>
        <h1> array:{arr[2]}</h1>
    </div>
  )
}

export default Hello