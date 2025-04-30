import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Dashboard = React.lazy(()=>import("./components/Dashboard"))

const Profile = React.lazy(()=> import("./components/Profile"))

import Main from "./components/Main";

const App = ()=>{
  return(
    <div>
      <h1>App</h1>


      <Main />

      <Routes>
        {/* <Route element={ <Dashboard/> } path="/dashboard" /> */}
        <Route 
        element={ 
        <Suspense fallback="loading1..." > <Dashboard/> </Suspense>
       } 
        path="/dashboard" />

        <Route element={ <Suspense fallback="loading2...">
          <Profile/>
        </Suspense> } path="/profile" />
      </Routes>
    </div>

    
  )
}

export default App;