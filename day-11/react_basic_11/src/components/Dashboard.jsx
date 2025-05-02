import { Link, useNavigate } from "react-router-dom"

const Dashboard = () => {
    let navigate = useNavigate()
    function handleProfile(){
        navigate('/profile')
    }
  return (
    <div>
        <h1>Dashboard</h1>
        <button onClick={handleProfile} >Visit profile</button>
    </div>
  )
}

export default Dashboard