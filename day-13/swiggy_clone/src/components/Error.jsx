import React from 'react'
import { useRouteError } from 'react-router-dom'


const Error = () => {

    const err = useRouteError();
    console.log(err , "err");
    

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-red-100 text-red-700 px-4">
      <div className="text-6xl mb-4">🚫</div>
      <div className="text-3xl font-bold mb-2">Oops! Something went wrong.</div>
      <div className="text-md mb-6">
        <p><strong>Status:</strong> {err.status}</p>
        <p><strong>Message:</strong> {err.statusText}</p>
        <p><strong>Details:</strong> {err.data}</p>
      </div>
      <a
        href="/"
        className="mt-4 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        Go Home
      </a>
    </div>
  );
}


export default Error