import { useNavigate } from "react-router-dom"

const Dashboard = () => {

    const navigatee = useNavigate()
    function handleProfile(){
        navigatee('/profile')
    }
  return (
    <div>
        <h1>Dashboard</h1>
        <button onClick={handleProfile} >Visit profile</button>
    </div>
  )
}

export default Dashboard