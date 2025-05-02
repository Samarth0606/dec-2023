import { Route,Routes } from "react-router-dom";
import Home from "./components/Home";
// import Dashboard from "./components/Dashboard";
import React from "react";
import PropDrilling from "./components/PropDrilling";
import A from "./components/A";
// import Profile from "./components/Profile";

const Profile = React.lazy(()=>import("./components/Profile"))
const Dashboard = React.lazy(()=>import("./components/Dashboard"))

const App = ()=>{
  return (
  <>
    <h1>Hello from App</h1>
    <PropDrilling></PropDrilling>

  {/* <A/>     */}
<Routes>
      <Route element={ <Home /> } path="/" />
      <Route element={ <Dashboard /> } path="/dashboard" />
      <Route element={ <Profile /> } path="/profile" />
    </Routes>
  </>
  )
}

export default App;