import React, { useEffect, useState } from 'react'

const Clock = () => {

    const [time,setTime] = useState(new Date().toLocaleTimeString())

    useEffect(()=>{
        let idd = setInterval(function(){
            setTime(new Date().toLocaleTimeString())
        } , 1000)
        return ()=> clearInterval(idd)
    } , [])

  return (
    <div>
        {time}
    </div>
  )
}

export default Clock