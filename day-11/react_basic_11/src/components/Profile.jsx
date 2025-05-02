import { useNavigate } from "react-router-dom"

const Profile = () => {
    let navigate = useNavigate()
    function handleDashboard(){
        navigate('/dashboard')
    }
  return (
    <div>
        <h1>Profile</h1>
        <button onClick={handleDashboard} >Visit Dashboard</button>
    </div>
  )
}

export default Profile