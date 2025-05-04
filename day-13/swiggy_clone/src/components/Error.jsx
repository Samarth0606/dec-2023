import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {

    const err = useRouteError();
    console.log(err , "err");
    

  return (
    <>
        <div className='font-bold'>Error</div>
        <h1>{err.data}</h1>
        <h1>{err.status}</h1>
        <h1>{err.statusText}</h1>
    </>
  )
}

export default Error